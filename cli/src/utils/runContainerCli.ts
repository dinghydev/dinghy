import { configGetEngineImage } from './dockerConfig.ts'
import { runDockerCmd } from './dockerUtils.ts'

export const runContainerCli = async (
  args: string[],
  workingDir: string,
  exitOnFailure = true,
) => {
  return await runDockerCmd(
    workingDir,
    [],
    ['reactiac', ...args],
    configGetEngineImage(),
    exitOnFailure,
  )
}
