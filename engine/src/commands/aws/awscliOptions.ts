import type { CommandOptions } from '@dinghy/cli'

export const awscliOptions: CommandOptions = {
  boolean: ['debug'],
  collect: ['awscli-options'],
  description: {
    'awscli-options': 'Additional awscli options',
  },
  arguments: {
    stack: {
      description: 'Stack name',
      required: false,
    },
  },
}
