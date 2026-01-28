import { hostAppHome, prepareTfImage, runDockerCmd } from '@dinghy/cli'
import Debug from 'debug'
import { Args } from '@std/cli/parse-args'
const debug = Debug('runTfImageCmd')

export const runTfImageCmd = async (
  workingDir: string,
  options: Args,
  cmd: string[],
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
    [],
    [...cmd, ...options.extraOptions],
    image,
    exitOnFailure,
    options['tf-docker-options'] || [],
  )
}
