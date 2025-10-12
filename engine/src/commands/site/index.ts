import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL, showHelp } from '@dinghy/cli'
import { createDocusaurusCommand } from './createDocusaurusCommand.ts'

const options: CommandOptions = {
  description: {},
  cmdDescription: 'Operation for docusaurus.io based site',
}

const run = (context: CommandContext, _args: CommandArgs) => {
  showHelp(context)
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
  docusaurus: createDocusaurusCommand(
    'Run docusaurus command with arbitrary arguments',
    ['yarn', 'docusaurus'],
    true,
  ),
  bash: createDocusaurusCommand(
    'Run bash in the docusaurus container',
    ['bash'],
    true,
  ),
  start: createDocusaurusCommand(
    'Start site in development mode',
    ['yarn', 'start'],
    true,
  ),
  build: createDocusaurusCommand('Build site', ['yarn', 'build']),
  deploy: createDocusaurusCommand('Deploy site', ['yarn', 'deploy']),
  serve: createDocusaurusCommand('Serve built static site', [
    'yarn',
    'serve',
  ], true),
}

export default commands
