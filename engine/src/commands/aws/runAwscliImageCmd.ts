import {
  type CommandArgs,
  configGetImage,
  hostAppHome,
  runDockerCmd,
} from '@dinghy/cli'
import Debug from 'debug'
const debug = Debug('runAwscliImageCmd')

export const runAwscliImageCmd = async (
  options: CommandArgs,
  args: string[],
  exitOnFailure = true,
) => {
  const image = configGetImage('awscli')
  const envs: Record<string, string> = {}
  if (debug.enabled) {
    envs['AWS_DEBUG'] = 'true'
  }

  return await runDockerCmd(
    hostAppHome,
    envs,
    [],
    [...args, ...(options['awscli-options'] || [])],
    image,
    exitOnFailure,
  )
}
