import Debug from 'debug'
const debug = Debug('tfDiffIgnores')

interface DiffIgnorePattern {
  type: string
  name?: string
  attribute?: string
}

const parseDiffIgnores = (
  ignores: string[] | undefined,
): DiffIgnorePattern[] => {
  return (ignores ?? [])
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const [type, name, attribute] = entry.split('.')
      return { type, name, attribute }
    })
}

const HEADER_RE = /^\s*#\s+(\S+)\s+(?:will be|must be)\s+(.+)$/
const TOP_ATTR_RE = /^\s*[+~-]\s*([A-Za-z0-9_]+)\s*(?:=|\()/

const resourceMatches = (
  patterns: DiffIgnorePattern[],
  type: string,
  name: string,
) =>
  patterns.filter((p) =>
    p.type === type &&
    (p.name === undefined || p.name === '*' || p.name === name)
  )

// Rewrites `planTxt` (Terraform/OpenTofu `tf show -no-color` output) by dropping
// whole resource-change blocks matched by `ignores` entries of the form
// `type`, `type.name` or `type.name.attribute`. `name` may be `*` to match any
// resource name of that type. An attribute-scoped entry only drops the
// resource if that attribute is the sole top-level change; if the resource
// also changed for other reasons, the block is kept as-is.
// This only affects notification/summary output; it never touches the plan file
// itself, so the real terraform/tofu plan and apply still act on all changes.
export const filterIgnoredResourceChanges = (
  planTxt: string,
  ignores: string[] | undefined,
): string => {
  const patterns = parseDiffIgnores(ignores)
  if (!patterns.length) return planTxt

  const lines = planTxt.split(/\r?\n/)
  const output: string[] = []
  const total = { add: 0, change: 0, destroy: 0 }
  const dropped = { add: 0, change: 0, destroy: 0 }

  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const header = line.match(HEADER_RE)
    if (!header || i + 1 >= lines.length) {
      output.push(line)
      i++
      continue
    }

    const address = header[1]
    const verb = header[2]
    const addressParts = address.replace(/\[[^\]]*\]$/, '').split('.')
    const resourceType = addressParts[addressParts.length - 2]
    const resourceName = addressParts[addressParts.length - 1]

    const declLine = lines[i + 1]
    const blockLines = [line, declLine]
    let depth = 0
    for (const ch of declLine) {
      if (ch === '{') depth++
      else if (ch === '}') depth--
    }
    let k = i + 2
    while (depth > 0 && k < lines.length) {
      const l = lines[k]
      blockLines.push(l)
      for (const ch of l) {
        if (ch === '{') depth++
        else if (ch === '}') depth--
      }
      k++
    }

    let addN = 0, changeN = 0, destroyN = 0
    if (/replaced/.test(verb)) {
      addN = 1
      destroyN = 1
    } else if (/destroyed/.test(verb)) destroyN = 1
    else if (/created/.test(verb)) addN = 1
    else if (/updated/.test(verb)) changeN = 1
    total.add += addN
    total.change += changeN
    total.destroy += destroyN

    const matches = resourceMatches(patterns, resourceType, resourceName)
    const wholeResourceIgnored = matches.some((p) => p.attribute === undefined)

    let ignoredBySoleAttribute = false
    if (!wholeResourceIgnored) {
      const attributePatterns = matches.filter((p) => p.attribute !== undefined)
      if (attributePatterns.length) {
        const topAttrNames = new Set<string>()
        let innerDepth = 0
        for (let idx = 2; idx < blockLines.length - 1; idx++) {
          const l = blockLines[idx]
          if (innerDepth === 0) {
            const m = l.match(TOP_ATTR_RE)
            if (m) topAttrNames.add(m[1])
          }
          for (const ch of l) {
            if (ch === '{') innerDepth++
            else if (ch === '}') innerDepth--
          }
        }
        ignoredBySoleAttribute = topAttrNames.size > 0 &&
          [...topAttrNames].every((a) =>
            attributePatterns.some((p) => p.attribute === a)
          )
      }
    }

    if (wholeResourceIgnored || ignoredBySoleAttribute) {
      debug('ignoring resource change %s (%s)', address, verb)
      dropped.add += addN
      dropped.change += changeN
      dropped.destroy += destroyN
      i = k
      if (lines[i] === '') i++
      continue
    }

    output.push(...blockLines)
    i = k
  }

  const kept = {
    add: total.add - dropped.add,
    change: total.change - dropped.change,
    destroy: total.destroy - dropped.destroy,
  }

  return output.map((line) =>
    line.startsWith('Plan: ')
      ? `Plan: ${kept.add} to add, ${kept.change} to change, ${kept.destroy} to destroy.`
      : line
  ).join('\n')
}
