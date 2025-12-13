import type { CommandArgs } from '@dinghy/cli'

export const terraformCommandName = (args: CommandArgs) =>
  args['enable-additional-providers'] ? 'tf' : 'terraform'
