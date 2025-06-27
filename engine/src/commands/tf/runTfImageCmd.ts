import type { CommandArgs } from '@reactiac/cli'
import { runDockerCmd } from '@reactiac/cli'
import { configGetTfImage } from '@reactiac/cli'
import { hostAppHome } from '@reactiac/cli'

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
