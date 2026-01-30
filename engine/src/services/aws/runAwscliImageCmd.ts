import {
  configGetImage,
  DinghyError,
  hostAppHome,
  runDockerCmd,
} from '@dinghy/cli'
import Debug from 'debug'
import { Args } from '@std/cli/parse-args'
const debug = Debug('runAwscliImageCmd')

export const runAwscliImageCmd = async (
  options: Args,
  args: string[],
) => {
  const image = configGetImage('awscli')
  const envs: Record<string, string> = {}
  if (debug.enabled) {
    envs['AWS_DEBUG'] = 'true'
  }

  const result = await runDockerCmd(
    hostAppHome,
    envs,
    [],
    [...args, ...options.extraOptions],
    image,
    false,
  )
  if (result.exitCode !== 0) {
    throw new DinghyError()
  }
  return result
}
