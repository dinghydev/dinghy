import { dirname, join } from '@std/path'
import type { CmdInput } from '@dinghy/cli'
import { dinghyAppConfig, DinghyError, hostAppHome } from '@dinghy/cli'
import type { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description:
    'Generate deno.jsonc with npm imports from dinghy.config.yml packages.',
  args: [
    {
      name: 'jsoncFile',
      description: 'Target deno.jsonc file path to generate',
      required: true,
    },
  ],
}

export const run = async (args: Args) => {
  const jsoncFileRaw = args.jsoncFile as string
  const jsoncFile = jsoncFileRaw.startsWith('/')
    ? jsoncFileRaw
    : join(hostAppHome, jsoncFileRaw)

  const packages: string[] =
    (dinghyAppConfig as any)?.docker?.images?.engine?.packages ?? []
  if (packages.length === 0) {
    throw new DinghyError(
      'No packages found under docker.images.engine.packages in dinghy.config.yml',
      'GENERATE_DENO_JSONC_NO_PACKAGES',
    )
  }

  const imports: Record<string, string> = {}
  for (const pkg of packages) {
    const i = pkg.indexOf('@', 1)
    const name = pkg.slice(0, i)
    const version = pkg.slice(i + 1)
    imports[name] = `npm:${name}@${version}`
  }

  await Deno.mkdir(dirname(jsoncFile), { recursive: true })
  await Deno.writeTextFile(
    jsoncFile,
    JSON.stringify({ imports }, null, 2) + '\n',
  )

  console.log(`generated ${jsoncFile}`)
}
