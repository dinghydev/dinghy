export const VERSION = '0.8.8'
import pkg from '../package.json' with { type: 'json' }

export function getVersion(): string {
  return pkg.version
} 