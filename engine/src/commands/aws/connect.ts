import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { deepMerge, DinghyError, OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { runAwscliImageCmd } from './runAwscliImageCmd.ts'
import { awscliOptions } from './awscliOptions.ts'
import chalk from 'chalk'
import { listConnectableInstances } from './list.ts'

const options: any = deepMerge(deepMerge({}, awscliOptions), {
  string: ['instance-id'],
  description: {
    'instance-id':
      'The instance id to connect to, could be sequence or actual instance id',
  },
  default: {
    'instance-id': '1',
  },
  alias: {
    i: 'instance-id',
  },
  cmdDescription: 'Connect to a specific instance in the stack',
})

const run = async (_context: CommandContext, args: CommandArgs) => {
  const instances = await listConnectableInstances(args)
  const instance = instances.find((instance: any, index: number) =>
    `${index + 1}` === args['instance-id']
      ? true
      : instance.InstanceId === args['instance-id']
      ? true
      : instance.Name === args['instance-id']
  )
  if (!instance) {
    throw new DinghyError(
      `Instance id ${args['instance-id']} not found in [${
        instance.map((resource: any) =>
          `${resource.Name}: ${resource.InstanceId}`
        ).join(', ')
      }]`,
    )
  }

  console.log(
    `Connecting to ${
      chalk.green(`${instance.Name}: ${instance.InstanceId}`)
    } ...`,
  )

  await runAwscliImageCmd(
    args,
    [
      'aws',
      'ssm',
      'start-session',
      '--region',
      instance.Region,
      '--target',
      instance.InstanceId as string,
    ],
  )
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
