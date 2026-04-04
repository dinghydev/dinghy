#!/usr/bin/env -S deno run -A
/**
 * Generates module documentation for the dinghy-iac skill.
 *
 * Reads source files from:
 *   - core/tf-aws/src/foundation/
 *   - core/tf-aws/src/composites/
 *   - core/tf-common/src/
 *
 * Extracts component names, hook names, and schema fields, then generates:
 *   - modules/foundation.md
 *   - modules/composites.md
 *   - modules/tf-common.md
 *
 * Run from the skill directory:
 *
 *   cd engine/templates/skills/dinghy-iac
 *   deno run -A generate-modules.ts
 *
 * Or from repo root:
 *
 *   deno run -A engine/templates/skills/dinghy-iac/generate-modules.ts
 *
 * Re-run whenever source files change.
 * The generated modules/*.md files should be committed to the repo.
 */

import { dirname, fromFileUrl, resolve } from '@std/path'

const SCRIPT_DIR = dirname(fromFileUrl(import.meta.url))
const REPO_ROOT = resolve(SCRIPT_DIR, '../../../..')
const TF_AWS_SRC = resolve(REPO_ROOT, 'core/tf-aws/src')
const TF_COMMON_SRC = resolve(REPO_ROOT, 'core/tf-common/src')
const MODULES_DIR = resolve(SCRIPT_DIR, 'modules')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readFile(path: string): string {
  try {
    return Deno.readTextFileSync(path)
  } catch {
    console.warn(`Warning: Could not read ${path}`)
    return ''
  }
}

/** Extract exported identifiers from `export { Foo, useFoo }` blocks */
function extractExports(content: string): string[] {
  const names: string[] = []
  const re = /export\s*\{([^}]+)\}/g
  let m
  while ((m = re.exec(content)) !== null) {
    for (
      const id of m[1].split(',').map((s) => s.split(' as ')[0].trim()).filter(
        Boolean,
      )
    ) {
      names.push(id)
    }
  }
  // Also pick up `export function Foo` and `export const Foo`
  const fnRe = /export\s+(?:function|const)\s+(\w+)/g
  while ((m = fnRe.exec(content)) !== null) {
    names.push(m[1])
  }
  return [...new Set(names)]
}

/** Split exports into components (PascalCase) and hooks (use*) */
function classify(
  exports: string[],
): { components: string[]; hooks: string[] } {
  const components: string[] = []
  const hooks: string[] = []
  for (const name of exports) {
    if (name.startsWith('use') && name[3] === name[3]?.toUpperCase()) {
      hooks.push(name)
    } else if (/^[A-Z]/.test(name) && /[a-z]/.test(name)) {
      // Skip types and schemas (InputSchema, OutputSchema, etc.)
      if (
        name.endsWith('Schema') || name.endsWith('Type') ||
        name.endsWith('Props')
      ) continue
      components.push(name)
    }
  }
  return { components, hooks }
}

/**
 * Extract top-level field names from a Zod schema definition.
 * Looks for patterns like `fieldName: z.xxx()` or `fieldName: resolvableValue(...)`.
 * Returns field names only (types are too complex to regex reliably).
 */
function extractSchemaFields(content: string, schemaName: string): string[] {
  // Find the schema block: `const SchemaName = z.object({` or `SomeSchema.extend({`
  const patterns = [
    new RegExp(
      `(?:const\\s+)?${schemaName}\\s*=\\s*(?:z\\.object|\\w+\\.extend)\\s*\\(\\{([^]*?)\\}\\s*\\)`,
      's',
    ),
    new RegExp(`${schemaName}\\s*=\\s*\\{([^]*?)\\}\\s*(?:&|$)`, 's'),
  ]

  for (const pattern of patterns) {
    const match = pattern.exec(content)
    if (!match) continue
    const block = match[1]
    const fields: string[] = []
    // Match lines like `  fieldName:` at the top indentation level
    const fieldRe = /^\s{2}(\w+)\s*:/gm
    let fm
    while ((fm = fieldRe.exec(block)) !== null) {
      fields.push(fm[1])
    }
    return fields
  }
  return []
}

/** Extract all schema fields from a file, trying common schema variable names */
function extractAllSchemaFields(
  content: string,
  componentName: string,
): string[] {
  const candidates = [
    'InputSchema',
    `${componentName}InputSchema`,
    `${componentName}Schema`,
  ]
  for (const name of candidates) {
    const fields = extractSchemaFields(content, name)
    if (fields.length > 0) return fields
  }
  // Fallback: look for any z.object definition
  const fields = extractSchemaFields(content, '\\w+')
  return fields
}

// ---------------------------------------------------------------------------
// Module generators
// ---------------------------------------------------------------------------

interface ComponentInfo {
  name: string
  file: string
  hooks: string[]
  fields: string[]
}

function processDirectory(
  dir: string,
  opts?: { recursive?: boolean },
): ComponentInfo[] {
  const results: ComponentInfo[] = []
  for (const entry of Deno.readDirSync(dir)) {
    if (entry.isDirectory && opts?.recursive) {
      results.push(...processDirectory(resolve(dir, entry.name), opts))
      continue
    }
    if (!entry.isFile || !entry.name.endsWith('.tsx')) continue
    const filePath = resolve(dir, entry.name)
    const content = readFile(filePath)
    if (!content) continue

    const allExports = extractExports(content)
    const { components, hooks } = classify(allExports)

    for (const comp of components) {
      const fields = extractAllSchemaFields(content, comp)
      results.push({
        name: comp,
        file: entry.name,
        hooks: hooks.filter((h) => h.includes(comp.replace(/^Data/, ''))),
        fields,
      })
    }
  }
  return results
}

function processCompositeDir(dir: string): ComponentInfo[] {
  const results: ComponentInfo[] = []
  // Read index.ts for the public API
  const indexContent = readFile(resolve(dir, 'index.ts'))
  const allExports = extractExports(indexContent)
  const { components, hooks } = classify(allExports)

  // Read types.ts for schema fields
  const typesContent = readFile(resolve(dir, 'types.ts'))

  // Read all .tsx files for additional schema info
  let tsxContent = ''
  for (const entry of Deno.readDirSync(dir)) {
    if (entry.isFile && entry.name.endsWith('.tsx')) {
      tsxContent += readFile(resolve(dir, entry.name)) + '\n'
    }
  }

  const combinedContent = typesContent + '\n' + tsxContent

  for (const comp of components) {
    const fields = extractAllSchemaFields(combinedContent, comp)
    const compHooks = hooks.filter((h) => {
      const baseName = comp.replace(/^Data/, '')
      return h.toLowerCase().includes(baseName.toLowerCase())
    })
    results.push({
      name: comp,
      file: dir.split('/').pop()!,
      hooks: compHooks,
      fields,
    })
  }

  return results
}

// ---------------------------------------------------------------------------
// Generate foundation.md
// ---------------------------------------------------------------------------

function generateFoundation(): void {
  const dir = resolve(TF_AWS_SRC, 'foundation')
  const infos = processDirectory(dir)
  // Also get exports from index.ts
  const indexContent = readFile(resolve(dir, 'index.ts'))
  const allExports = extractExports(indexContent)
  const { hooks: indexHooks } = classify(allExports)

  // Merge index hooks into component infos
  for (const info of infos) {
    for (const h of indexHooks) {
      if (h.includes(info.name) && !info.hooks.includes(h)) {
        info.hooks.push(h)
      }
    }
  }

  let md = `# Foundation\n\n`
  md += `\`import { ... } from '@dinghy/tf-aws'\`\n\n`
  md +=
    `Core components that set up the AWS provider, state backend, and stack structure.\n\n`

  for (const info of infos) {
    md += `## ${info.name}\n\n`
    if (info.hooks.length > 0) {
      md += `**Hooks:** ${info.hooks.map((h) => `\`${h}()\``).join(', ')}\n\n`
    }
    if (info.fields.length > 0) {
      md += `**Props:** ${info.fields.map((f) => `\`${f}\``).join(', ')}\n\n`
    }
  }

  Deno.writeTextFileSync(resolve(MODULES_DIR, 'foundation.md'), md)
  console.log(`Generated foundation.md (${infos.length} components)`)
}

// ---------------------------------------------------------------------------
// Generate composites.md
// ---------------------------------------------------------------------------

function generateComposites(): void {
  const compositesDir = resolve(TF_AWS_SRC, 'composites')
  const importMapping: Record<string, string> = {
    cloudfront: '@dinghy/tf-aws/cloudfront',
    ec2: '@dinghy/tf-aws/ec2',
    iam: '@dinghy/tf-aws/iam',
    lambda: '@dinghy/tf-aws/lambda',
    s3: '@dinghy/tf-aws/s3',
    vpc: '@dinghy/tf-aws/vpc',
  }

  let md = `# Composites\n\n`
  md +=
    `High-level components that create multiple Terraform resources automatically.\n`
  md +=
    `Each composite handles common patterns (auto-VPC, auto-IAM, auto-discovery) so the TSX stays minimal.\n\n`

  let totalComponents = 0

  for (const [dirName, importPath] of Object.entries(importMapping).sort()) {
    const dir = resolve(compositesDir, dirName)
    const infos = processCompositeDir(dir)
    if (infos.length === 0) continue

    md += `---\n\n`
    md += `## ${dirName}\n\n`
    md += `\`import { ... } from '${importPath}'\`\n\n`

    for (const info of infos) {
      md += `### ${info.name}\n\n`
      if (info.hooks.length > 0) {
        md += `**Hooks:** ${info.hooks.map((h) => `\`${h}()\``).join(', ')}\n\n`
      }
      if (info.fields.length > 0) {
        md += `**Props:** ${info.fields.map((f) => `\`${f}\``).join(', ')}\n\n`
      }
    }

    totalComponents += infos.length
  }

  Deno.writeTextFileSync(resolve(MODULES_DIR, 'composites.md'), md)
  console.log(`Generated composites.md (${totalComponents} components)`)
}

// ---------------------------------------------------------------------------
// Generate tf-common.md
// ---------------------------------------------------------------------------

function generateTfCommon(): void {
  const infos = [
    ...processDirectory(TF_COMMON_SRC),
    ...processDirectory(resolve(TF_COMMON_SRC, 'archive')),
  ]

  let md = `# Common\n\n`
  md += `\`import { ... } from '@dinghy/tf-common'\`\n\n`
  md +=
    `Provider-agnostic components for outputs, backends, local files, and archives.\n\n`

  for (const info of infos) {
    md += `## ${info.name}\n\n`
    if (info.hooks.length > 0) {
      md += `**Hooks:** ${info.hooks.map((h) => `\`${h}()\``).join(', ')}\n\n`
    }
    if (info.fields.length > 0) {
      md += `**Props:** ${info.fields.map((f) => `\`${f}\``).join(', ')}\n\n`
    }
  }

  Deno.writeTextFileSync(resolve(MODULES_DIR, 'tf-common.md'), md)
  console.log(`Generated tf-common.md (${infos.length} components)`)
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

Deno.mkdirSync(MODULES_DIR, { recursive: true })

generateFoundation()
generateComposites()
generateTfCommon()

console.log('\nDone. Module files written to modules/')
