#!/usr/bin/env -S deno run -A
/**
 * Generates category-level .md files for the dinghy-diagram skill.
 *
 * Reads core/diagrams/deno.jsonc exports, extracts PascalCase component names
 * from each index.ts, and generates grouped .md files into modules/.
 *
 * Run from the skill directory:
 *
 *   cd engine/templates/skills/dinghy-diagram
 *   deno run -A generate-modules.ts
 *
 * Or from repo root:
 *
 *   deno run -A engine/templates/skills/dinghy-diagram/generate-modules.ts
 *
 * Re-run whenever core/diagrams/deno.jsonc or any index.ts files change.
 * The generated modules/*.md files should be committed to the repo.
 */

import { dirname, fromFileUrl, resolve } from '@std/path'

const SCRIPT_DIR = dirname(fromFileUrl(import.meta.url))
const DIAGRAMS_ROOT = resolve(SCRIPT_DIR, '../../../../core/diagrams')
const MODULES_DIR = resolve(SCRIPT_DIR, 'modules')

// Parse JSONC (strip comments)
function parseJsonc(text: string): unknown {
  const stripped = text
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
  return JSON.parse(stripped)
}

// Extract PascalCase component names from index.ts content
function extractComponents(content: string): string[] {
  const components: string[] = []
  // Match all export blocks and extract identifiers
  const exportBlockRe = /export\s*\{([^}]+)\}/g
  let match
  while ((match = exportBlockRe.exec(content)) !== null) {
    const block = match[1]
    const identifiers = block.split(',').map((s) => s.trim()).filter(Boolean)
    for (const id of identifiers) {
      // Skip ALL_UPPER_CASE constants (with underscores)
      if (/^[A-Z0-9_]+$/.test(id) && id.includes('_')) continue
      // Pick anything that starts with uppercase and contains lowercase
      if (/^[A-Z]/.test(id) && /[a-z]/.test(id)) {
        components.push(id)
      }
    }
  }
  return [...new Set(components)]
}

// Parse source path to extract metadata
function parseSourcePath(sourcePath: string): {
  type: string
  domain: string
  provider: string
  subcategory: string
} {
  const parts = sourcePath.replace('./src/', '').replace('/index.ts', '').split(
    '/',
  )
  return {
    type: parts[0] || '',
    domain: parts[1] || '',
    provider: parts[2] || '',
    subcategory: parts.slice(3).join('/'),
  }
}

// kebab-case to Human Readable
function humanize(s: string): string {
  if (!s) return ''
  return s
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// Determine the grouping key (provider-level)
function getGroupKey(meta: ReturnType<typeof parseSourcePath>): string {
  // For composites, use the composite name
  if (meta.type === 'composites') return 'composites'

  // Group standard types together
  if (meta.domain === 'standard') return 'standard'

  // Group by provider
  return meta.provider
}

// Read config
const denoJsoncText = Deno.readTextFileSync(
  resolve(DIAGRAMS_ROOT, 'deno.jsonc'),
)
const config = parseJsonc(denoJsoncText) as { exports: Record<string, string> }

// Group modules by provider
interface ModuleInfo {
  moduleName: string
  sourcePath: string
  meta: ReturnType<typeof parseSourcePath>
  components: string[]
}

const groups = new Map<string, ModuleInfo[]>()

for (const [exportKey, sourcePath] of Object.entries(config.exports)) {
  const moduleName = exportKey.replace('./', '')
  if (!moduleName || moduleName === '.') continue

  const meta = parseSourcePath(sourcePath)
  const groupKey = getGroupKey(meta)

  const indexPath = resolve(DIAGRAMS_ROOT, sourcePath)
  let content: string
  try {
    content = Deno.readTextFileSync(indexPath)
  } catch {
    console.warn(`Warning: Could not read ${indexPath}`)
    continue
  }

  const components = extractComponents(content)

  const info: ModuleInfo = { moduleName, sourcePath, meta, components }
  if (!groups.has(groupKey)) groups.set(groupKey, [])
  groups.get(groupKey)!.push(info)
}

// Ensure modules directory exists
Deno.mkdirSync(MODULES_DIR, { recursive: true })

// Build a descriptive category title from folder path segments (domain + provider).
// e.g. for active-directory: "Software, Active Directory"
// e.g. for aws: "Networking, Aws"
function buildCategoryTitle(modules: ModuleInfo[]): string {
  const domains = [
    ...new Set(modules.map((m) => humanize(m.meta.domain)).filter(Boolean)),
  ]
  const providers = [
    ...new Set(modules.map((m) => humanize(m.meta.provider)).filter(Boolean)),
  ]
  return [...domains, ...providers]
    .filter(Boolean)
    .join(', ')
}

// Generate category .md files
let totalModules = 0

for (
  const [groupKey, modules] of [...groups.entries()].sort((a, b) =>
    a[0].localeCompare(b[0])
  )
) {
  const fileName = `${groupKey}.md`
  const title = buildCategoryTitle(modules)

  // Sort modules by name
  modules.sort((a, b) => a.moduleName.localeCompare(b.moduleName))

  // Build the file content
  let md = `# ${title}\n\n`

  // Group by type within the file (containers first, then entities, then dependencies)
  const typeOrder = ['containers', 'entities', 'dependencies', 'composites']
  const byType = new Map<string, ModuleInfo[]>()
  for (const m of modules) {
    const t = m.meta.type
    if (!byType.has(t)) byType.set(t, [])
    byType.get(t)!.push(m)
  }

  for (const type of typeOrder) {
    const typeModules = byType.get(type)
    if (!typeModules) continue

    md += `## ${humanize(type)}\n\n`

    for (const m of typeModules) {
      const desc = [humanize(m.meta.provider), humanize(m.meta.subcategory)]
        .filter(Boolean)
        .join(' — ')

      md += `### ${m.moduleName}\n`
      md += `\`import { ... } from '@dinghy/diagrams/${m.moduleName}'\`\n\n`
      if (desc) md += `${desc}\n\n`
      md += `${m.components.join(', ')}\n\n`
    }
  }

  Deno.writeTextFileSync(resolve(MODULES_DIR, fileName), md)
  totalModules += modules.length

  const allComponents = modules.flatMap((m) => m.components)
  console.log(
    `Generated ${fileName} (${modules.length} modules, ${allComponents.length} components)`,
  )
}

console.log(`\nTotal: ${groups.size} categories, ${totalModules} modules`)

// Output catalog table for SKILL.md
console.log(
  `\n--- Copy the table below into SKILL.md Component Catalog section ---\n`,
)
console.log(`| Category | File | Modules | Sample Components |`)
console.log(`|----------|------|---------|-------------------|`)
for (
  const [groupKey, modules] of [...groups.entries()].sort((a, b) =>
    a[0].localeCompare(b[0])
  )
) {
  const fileName = `${groupKey}.md`
  const title = buildCategoryTitle(modules)
  const allComponents = modules.flatMap((m) => m.components)
  const sample = allComponents.slice(0, 5).join(', ') +
    (allComponents.length > 5 ? ', ...' : '')
  console.log(
    `| ${title} | \`modules/${fileName}\` | ${modules.length} | ${sample} |`,
  )
}
