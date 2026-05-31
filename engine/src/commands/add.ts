import type { CmdInput } from '@dinghy/cli'
import { cmdStream, DinghyError, hostAppHome } from '@dinghy/cli'
import { existsSync } from '@std/fs/exists'
import * as yaml from '@std/yaml'
import { Args } from '@std/cli/parse-args'

const SUPPORTED_TYPES = ['engine', 'site', 'slide'] as const

export const schema: CmdInput = {
  description: 'Add an npm (or jsr, for engine) package to project',
  options: [
    {
      name: 'type',
      description: `Which docker image's packages array to update (one of: ${
        SUPPORTED_TYPES.join(', ')
      })`,
      default: 'engine',
    },
  ],
  args: [
    {
      name: 'package',
      description:
        'Package spec (defaults to npm; prefix with `jsr:` for a jsr ' +
        'package, e.g. `dayjs@1.11.19` or `jsr:@std/yaml`)',
      required: true,
    },
  ],
}

export const run = async (args: Args) => {
  const type = args.type
  if (!(SUPPORTED_TYPES as readonly string[]).includes(type)) {
    throw new DinghyError(
      `Unsupported --type '${type}', expected one of ${
        SUPPORTED_TYPES.join(', ')
      }`,
    )
  }
  const pkg = args.package
  await cmdStream(['deno', 'add', '--npm', pkg], true, hostAppHome)

  const configPath = resolveConfigPath()
  const config: any = existsSync(configPath)
    ? (yaml.parse(Deno.readTextFileSync(configPath)) as any) ?? {}
    : {}
  config.docker ??= {}
  config.docker.images ??= {}
  config.docker.images[type] ??= {}
  config.docker.images[type].packages ??= []
  if (!config.docker.images[type].packages.includes(pkg)) {
    config.docker.images[type].packages.push(pkg)
    Deno.writeTextFileSync(configPath, yaml.stringify(config))
    console.log(
      `Added ${pkg} to docker.images.${type}.packages in ${configPath}`,
    )
  } else {
    console.log(
      `${pkg} already listed in docker.images.${type}.packages of ${configPath}, skipped`,
    )
  }
}

function resolveConfigPath(): string {
  const candidates = [
    `${hostAppHome}/config/dinghy.config.yml`,
    `${hostAppHome}/dinghy.config.yml`,
  ]
  return candidates.find((p) => existsSync(p)) ?? candidates[1]
}
