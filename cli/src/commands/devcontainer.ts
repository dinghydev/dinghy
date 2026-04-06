import { existsSync } from '@std/fs/exists'
import { hostAppHome } from '../shared/home.ts'
import Debug from 'debug'
import { CmdInput } from '../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'
import { cmdCapture } from '../utils/cmd.ts'
import { runEngineCommand } from '../services/docker/runEngineCommand.ts'
const debug = Debug('devcontainer')

export const generationSchema: CmdInput = {
  description: 'Open the project in devcontainer',
  alias: ['dc'],
  options: [
    {
      name: 'engine',
      description:
        'Ignore the image detection and use the default engine image',
      boolean: true,
    },
    {
      name: 'site',
      description: 'Ignore the image detection and use the site image',
      boolean: true,
    },
    {
      name: 'slide',
      description: 'Ignore the image detection and use the slide image.',
      boolean: true,
    },
    {
      name: 'site-dir',
      description:
        'Path to the site base directory, default to site directory in app home if exists, otherwise current directory',
      hidden: true,
    },
  ],
}

export const schema: CmdInput = {
  ...generationSchema,
  options: [
    ...generationSchema.options!,
    {
      name: 'skip-open',
      description:
        'Do not open the devcontainer. Generate .devcontainer.json only',
      boolean: true,
    },
  ],
}

export const run = async (args: Args) => {
  const devcontainerConfig = await prepareConfig()
  if (!args['skip-open']) {
    if (devcontainerConfig) {
      debug('remove devcontainer %s if exits', devcontainerConfig.name)
      debug('running command from %s: devcontainer open', hostAppHome)
      await cmdCapture(['docker', 'rm', '-f', devcontainerConfig.name], false)
    }

    const result = await cmdCapture(
      ['devcontainer', 'open'],
      false,
      hostAppHome,
    )
    if (!result.success) {
      console.log(
        `Failed to open devcontainer, make sure it has been installed correctly https://code.visualstudio.com/docs/devcontainers/devcontainer-cli#_installation`,
      )
    }
  }
}

async function prepareConfig() {
  await runEngineCommand(Deno.args)
  const configFile = `${hostAppHome}/.devcontainer.json`
  if (existsSync(configFile)) {
    return JSON.parse(Deno.readTextFileSync(configFile))
  }
}
