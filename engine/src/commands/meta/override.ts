import { existsSync } from '@std/fs/exists'
import { dirname } from '@std/path'
import type { CmdInput } from '@dinghy/cli'
import { containerAppHome, DinghyError } from '@dinghy/cli'
import { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description: 'Override a Dinghy file by copying it into the project.',
  args: [
    {
      name: 'path',
      description: 'Dinghy file path to override',
      required: true,
    },
  ],
}

const normalisePath = (input: string): string => {
  let rel = input
  if (rel.startsWith('/workspace/')) {
    rel = rel.slice('/workspace/'.length)
  } else if (rel.startsWith('/workspace')) {
    rel = rel.slice('/workspace'.length)
  }
  rel = rel.replace(/^\/+/, '')
  if (!rel.startsWith('.dinghy')) {
    rel = `.dinghy/${rel}`
  }
  return rel
}

export const run = (args: Args) => {
  const input = args.path as string
  const rel = normalisePath(input)
  const source = `/workspace/${rel}`
  const target = `${containerAppHome}/${rel}`

  if (!existsSync(source)) {
    throw new DinghyError(
      `Source file not found: ${source}`,
      'OVERRIDE_SOURCE_MISSING',
    )
  }
  if (existsSync(target)) {
    throw new DinghyError(
      `Target already exists: ${target}`,
      'OVERRIDE_TARGET_EXISTS',
    )
  }

  Deno.mkdirSync(dirname(target), { recursive: true })
  Deno.copyFileSync(source, target)
  Deno.removeSync(source)
  Deno.symlinkSync(target, source)

  console.log(`Overrode ${source} -> ${target}`)
}
