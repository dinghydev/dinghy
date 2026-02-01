import { HANDLED_ERROR_EXIT_CODE } from '../../types.ts'
import Debug from 'debug'
import { dinghyHome, hostAppHome } from '../../shared/home.ts'
import { runDockerCmd } from '../../utils/dockerUtils.ts'
import { projectVersionRelease } from '../../utils/projectVersions.ts'
import { ExecaError } from 'execa'
import { walk } from '@std/fs/walk'
import { existsSync } from '@std/fs/exists'

import { run as cacheRun } from '../../commands/docker/cache.ts'
import chalk from 'chalk'
import { parseArgs } from '@std/cli/parse-args'
import { useEnvVar } from '../../utils/loadConfig.ts'
import { configGetEngineImage } from '../config/configGetEngineImage.ts'
import { isCi } from '@dinghy/cli'
import { ENGINE_DOCKER_OPTIONS } from '../config/engineDockerOptions.ts'
const debug = Debug('runEngineCommand')

const populateCacheIfNeeded = async () => {
  if (
    Deno.env.get('DINGHY_DOCKER_PREPOPULATE_CACHE') === 'true' && !isCi()
  ) {
    const cacheMarkerFile = `${dinghyHome}/states/marker-cache-populated-${
      (await configGetEngineImage()).replace(/\W/g, '')
    }`
    if (!existsSync(cacheMarkerFile)) {
      console.log(
        'Populating docker image cache to from custom registry to avoid permission issues later ...',
      )
      await cacheRun({ 'use-local-cache': true } as any)
      Deno.mkdirSync(`${dinghyHome}/states`, { recursive: true })
      Deno.writeTextFileSync(cacheMarkerFile, new Date().toISOString())
      console.log(chalk.green('Cache populated successfully'))
    }
  }
}

function collectDockerArgs(originalArgs: string[]) {
  const dockerArgs: string[] = []
  if (
    originalArgs.join(' ').includes(
      '--engine-docker-options',
    )
  ) {
    const parsedOptions: any = parseArgs(originalArgs, {
      collect: [ENGINE_DOCKER_OPTIONS.name],
    })
    const engineDockerOptions = parsedOptions[ENGINE_DOCKER_OPTIONS.name]
    dockerArgs.push(...engineDockerOptions)
    debug('parsed engine docker options from args: %s', engineDockerOptions)
  } else {
    const envValue = useEnvVar([ENGINE_DOCKER_OPTIONS.env])
    if (envValue) {
      const splitter = envValue.includes(',') ? ',' : ' '
      const engineDockerOptions = envValue.split(splitter).map((v: string) =>
        v.trim()
      )
      dockerArgs.push(...engineDockerOptions)
      debug('parsed engine docker options from env: %s', engineDockerOptions)
    }
  }
  return dockerArgs
}

async function collectDinghyFileOverrideMount() {
  const dotDinghyFiles: any[] = []
  const overrideDir = `${hostAppHome}/.dinghy_file_override`
  if (existsSync(overrideDir)) {
    for await (const entry of walk(overrideDir, { includeDirs: false })) {
      const source = entry.path
      const target = entry.path.replace(overrideDir, '/dinghy')
      debug('Mounting override file: %s => %s', source, target)
      dotDinghyFiles.push({ source, target })
    }
  }
  return dotDinghyFiles
}

export async function runEngineCommand(args: string[]) {
  debug('running engine command [%s]', args.join(' '))

  await populateCacheIfNeeded()

  try {
    await runDockerCmd(
      hostAppHome,
      { DINGHY_CLI_VERSION: projectVersionRelease() },
      await collectDinghyFileOverrideMount(),
      [
        'dinghy',
        ...args,
      ],
      await configGetEngineImage(),
      true,
      collectDockerArgs(args),
    )
    debug('Engine command finished')
  } catch (e) {
    debug('Engine command failed: %O', e)
    if (e instanceof ExecaError && e.exitCode === HANDLED_ERROR_EXIT_CODE) {
      Deno.exit(1)
    } else {
      throw e
    }
  }
}
