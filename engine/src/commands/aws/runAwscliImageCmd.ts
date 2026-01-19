import {
  type CommandArgs,
  configGetImage,
  hostAppHome,
  runDockerCmd,
} from '@dinghy/cli'
import Debug from 'debug'
const debug = Debug('runAwscliImageCmd')

export const runAwscliImageCmd = async (
  workingDir: string,
  options: CommandArgs,
  args: string[],
  exitOnFailure = true,
) => {
  const containerWorkingDir = workingDir.startsWith('/')
    ? workingDir
    : `${hostAppHome}/${workingDir}`
  const image = configGetImage('awscli')
  const envs: Record<string, string> = {}
  if (debug.enabled) {
    envs['AWS_DEBUG'] = 'true'
  }

  return await runDockerCmd(
    containerWorkingDir,
    envs,
    [{
      source: containerWorkingDir,
      target: containerWorkingDir,
    }],
    [...args, ...(options['awscli-options'] || [])],
    image,
    exitOnFailure,
  )
}
