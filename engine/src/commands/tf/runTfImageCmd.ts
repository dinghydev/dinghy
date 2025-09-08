import type { CommandArgs } from '@dinghy/cli'
import { runDockerCmd } from '@dinghy/cli'
import { configGetTfImage } from '@dinghy/cli'
import { hostAppHome } from '@dinghy/cli'

export const runTfImageCmd = async (
  workingDir: string,
  options: CommandArgs,
  args: string[],
  exitOnFailure = true,
) => {
  const containerWorkingDir = workingDir.startsWith('/')
    ? workingDir
    : `${hostAppHome}/${workingDir}`

  return await runDockerCmd(
    containerWorkingDir,
    {},
    [{
      source: containerWorkingDir,
      target: containerWorkingDir,
    }],
    [...args, ...(options['tf-options'] || [])],
    configGetTfImage(),
    exitOnFailure,
  )
}
