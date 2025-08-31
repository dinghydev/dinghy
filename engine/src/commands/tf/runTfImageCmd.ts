import type { CommandArgs } from '@diac/cli'
import { runDockerCmd } from '@diac/cli'
import { configGetTfImage } from '@diac/cli'
import { hostAppHome } from '@diac/cli'

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
