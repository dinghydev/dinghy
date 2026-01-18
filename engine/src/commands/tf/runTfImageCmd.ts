import {
  type CommandArgs,
  hostAppHome,
  prepareTfImage,
  runDockerCmd,
} from '@dinghy/cli'
import Debug from 'debug'
const debug = Debug('runTfImageCmd')

export const runTfImageCmd = async (
  workingDir: string,
  options: CommandArgs,
  args: string[],
  exitOnFailure = true,
) => {
  const containerWorkingDir = workingDir.startsWith('/')
    ? workingDir
    : `${hostAppHome}/${workingDir}`
  const image = prepareTfImage()
  const envs: Record<string, string> = {}
  if (debug.enabled) {
    envs['TF_LOG'] = 'DEBUG'
  }

  return await runDockerCmd(
    containerWorkingDir,
    envs,
    [{
      source: containerWorkingDir,
      target: containerWorkingDir,
    }],
    [...args, ...(options['tf-options'] || [])],
    image,
    exitOnFailure,
  )
}
