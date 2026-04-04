#!/usr/bin/env -S deno run -A
/**
 * Generates module documentation for the dinghy-cli skill.
 *
 * Reads README.mdx files from sites/www/src/docs/references/commands/
 * and generates one .md file per top-level command category into modules/.
 *
 * Run from the skill directory:
 *
 *   cd engine/templates/skills/dinghy-cli
 *   deno run -A generate-modules.ts
 *
 * Or from repo root:
 *
 *   deno run -A engine/templates/skills/dinghy-cli/generate-modules.ts
 *
 * Re-run whenever command docs change.
 * The generated modules/*.md files should be committed to the repo.
 */

import { dirname, fromFileUrl, resolve } from '@std/path'

const SCRIPT_DIR = dirname(fromFileUrl(import.meta.url))
const COMMANDS_DIR = resolve(
  SCRIPT_DIR,
  '../../../../sites/www/src/docs/references/commands',
)
const MODULES_DIR = resolve(SCRIPT_DIR, 'modules')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readFile(path: string): string {
  try {
    return Deno.readTextFileSync(path)
  } catch {
    return ''
  }
}

/** Strip YAML frontmatter (--- ... ---) from MDX content */
function stripFrontmatter(content: string): string {
  return content.replace(/^---[\s\S]*?---\n*/m, '')
}

/** Convert docusaurus links like [text](./sub/README.mdx) to plain text */
function stripDocLinks(content: string): string {
  return content.replace(/\[([^\]]+)\]\(\.[^)]+\)/g, '$1')
}

/** Clean MDX content for use in a skill module */
function cleanContent(content: string): string {
  return stripDocLinks(stripFrontmatter(content)).trim()
}

/** Extract first heading text and description from content */
function extractDescription(content: string): string {
  const cleaned = cleanContent(content)
  const lines = cleaned.split('\n')
  // Skip the heading line, find first non-empty non-heading line
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (
      line && !line.startsWith('#') && !line.startsWith('```') &&
      !line.startsWith('|')
    ) {
      return line
    }
  }
  return ''
}

/** Get sorted subdirectories of a directory */
function getSubdirs(dir: string): string[] {
  const dirs: string[] = []
  try {
    for (const entry of Deno.readDirSync(dir)) {
      if (entry.isDirectory) {
        dirs.push(entry.name)
      }
    }
  } catch {
    // directory doesn't exist
  }
  return dirs.sort()
}

/**
 * Recursively read command docs from a directory.
 * Returns markdown with the command's README content and all subcommand docs.
 */
function readCommandDocs(dir: string, headingLevel: number): string {
  const readme = readFile(resolve(dir, 'README.mdx'))
  if (!readme) return ''

  let md = cleanContent(readme)

  // Adjust heading levels: replace leading # with the appropriate level
  // The top-level command keeps its heading; subcommands get deeper headings
  if (headingLevel > 1) {
    md = md.replace(/^(#{1,6})\s/gm, (_match, hashes: string) => {
      const newLevel = Math.min(hashes.length + headingLevel - 1, 6)
      return '#'.repeat(newLevel) + ' '
    })
  }

  // Process subcommand directories
  const subdirs = getSubdirs(dir)
  for (const subdir of subdirs) {
    const subContent = readCommandDocs(resolve(dir, subdir), headingLevel + 1)
    if (subContent) {
      md += '\n\n' + subContent
    }
  }

  return md
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

Deno.mkdirSync(MODULES_DIR, { recursive: true })

interface ModuleInfo {
  name: string
  description: string
  fileName: string
}

const modules: ModuleInfo[] = []

// --- Generate cli.md (all CLI commands in one file) ---
{
  const cliDir = resolve(COMMANDS_DIR, 'cli')
  const content = readCommandDocs(cliDir, 1)
  if (content) {
    const fileName = 'cli.md'
    Deno.writeTextFileSync(resolve(MODULES_DIR, fileName), content + '\n')
    const desc = extractDescription(readFile(resolve(cliDir, 'README.mdx')))
    modules.push({ name: 'cli', description: desc, fileName })
    console.log(`Generated ${fileName}`)
  }
}

// --- Generate one module per engine subcommand ---
{
  const engineDir = resolve(COMMANDS_DIR, 'engine')
  const subdirs = getSubdirs(engineDir)

  for (const subdir of subdirs) {
    const cmdDir = resolve(engineDir, subdir)
    const content = readCommandDocs(cmdDir, 1)
    if (!content) continue

    const fileName = `${subdir}.md`
    Deno.writeTextFileSync(resolve(MODULES_DIR, fileName), content + '\n')

    const desc = extractDescription(readFile(resolve(cmdDir, 'README.mdx')))
    modules.push({ name: subdir, description: desc, fileName })
    console.log(`Generated ${fileName}`)
  }
}

console.log(`\nTotal: ${modules.length} modules`)

// --- Output catalog table for SKILL.md ---
console.log(
  '\n--- Copy the table below into SKILL.md Command Catalog section ---\n',
)
console.log('| Command | Description | Module |')
console.log('| ------- | ----------- | ------ |')
for (const mod of modules) {
  const cmd = mod.name === 'cli' ? 'dinghy (cli)' : `dinghy ${mod.name}`
  console.log(
    `| \`${cmd}\` | ${mod.description} | \`modules/${mod.fileName}\` |`,
  )
}
