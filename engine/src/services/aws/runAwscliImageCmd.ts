import { configGetToolImage, hostAppHome, runDockerCmd } from '@dinghy/cli'
import Debug from 'debug'
import { Args } from '@std/cli/parse-args'
const debug = Debug('runAwscliImageCmd')

export const runAwscliImageCmd = async (
  options: Args,
  args: string[],
) => {
  const image = await configGetToolImage('awscli')
  const envs: Record<string, string> = {}
  if (debug.enabled) {
    envs['AWS_DEBUG'] = 'true'
  }

  await runDockerCmd(
    hostAppHome,
    envs,
    [],
    [...args, ...options.extraOptions],
    image,
    true,
  )
}
