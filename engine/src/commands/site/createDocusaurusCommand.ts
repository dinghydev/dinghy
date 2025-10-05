import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { runDocusaurusCmd } from './runDocusaurusCmd.ts'

export const createDocusaurusCommand = (
  cmdDescription: string,
  cmd: string[],
  supportPort = false,
): Commands => {
  const cmdOptions: CommandOptions = {
    collect: ['docker-volumes'],
    string: ['site', 'site-dir', 'site-output', 'site-args', 'docker-args'],
    description: {
      'site': 'Named site if there are multiple sites configured',
      'site-dir': 'Path to the site base directory',
      'site-output': 'The build output directory',
      'site-args': 'Additional arguments to pass to the docusaurus command',
      'docker-volumes': 'Additional volumes mapped to the docker container',
      'docker-args': 'Additional arguments to pass to the docker run command',
    },
    default: {},
    cmdDescription,
  }
  if (supportPort) {
    ;(cmdOptions.string as string[]).push('port')
    ;(cmdOptions.description as any).port = 'Port to listen on'
    ;(cmdOptions.default as any).port = '3000'
  }

  const run = async (context: CommandContext, args: CommandArgs) => {
    await runDocusaurusCmd(context, args, cmd)
  }
  return {
    [OPTIONS_SYMBOL]: cmdOptions,
    [RUN_SYMBOL]: run,
  }
}
