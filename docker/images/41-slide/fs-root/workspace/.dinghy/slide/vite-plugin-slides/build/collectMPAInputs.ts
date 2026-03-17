import fs from 'node:fs'
import path from 'node:path'
import { OUTPUT_DEV_DIR } from '../config/constants'

export function collectMPAInputs(): Record<string, string> {
  const input: Record<string, string> = {}
  function walk(dir: string): void {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name !== 'assets') walk(abs)
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        const rel = path.relative(OUTPUT_DEV_DIR, abs)
        const key = rel.replace(/\/index\.html$/, '').replace(/\.html$/, '') || 'index'
        input[key] = abs
      }
    }
  }
  walk(OUTPUT_DEV_DIR)
  return input
}
