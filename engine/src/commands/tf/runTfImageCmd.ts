import {
  type CommandArgs,
  configGetImage,
  hostAppHome,
  prepareOndemandImage,
  runDockerCmd,
} from '@dinghy/cli'

export const runTfImageCmd = async (
  workingDir: string,
  options: CommandArgs,
  args: string[],
  exitOnFailure = true,
) => {
  const containerWorkingDir = workingDir.startsWith('/')
    ? workingDir
    : `${hostAppHome}/${workingDir}`
  const image = configGetImage('tf')
  await prepareOndemandImage(image)

  return await runDockerCmd(
    containerWorkingDir,
    {},
    [{
      source: containerWorkingDir,
      target: containerWorkingDir,
    }],
    [...args, ...(options['tf-options'] || [])],
    image,
    exitOnFailure,
  )
}
