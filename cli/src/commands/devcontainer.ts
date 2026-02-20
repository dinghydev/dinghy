import { existsSync } from '@std/fs/exists'
import { hostAppHome } from '../shared/home.ts'
import Debug from 'debug'
import { CmdInput } from '../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'
import { cmdCapture } from '../utils/cmd.ts'
import { runEngineCommand } from '../services/docker/runEngineCommand.ts'
const debug = Debug('devcontainer')

export const generationSchema: CmdInput = {
  description: 'Start the project in devcontainer',
  alias: ['dc'],
  options: [
    {
      name: 'volumns',
      description: 'Additional volumns to mount to the devcontainer',
      multiple: true,
    },
    {
      name: 'workspace',
      description: 'The workspace folder to use in the devcontainer',
    },
    {
      name: 'engine',
      description:
        'Ignore the image detection and use the default engine image',
      boolean: true,
    },
    {
      name: 'site',
      description:
        'Ignore the image detection and use the site image. Could be name if multiple sites are configured. Value is not required if there is only one site configured.',
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
