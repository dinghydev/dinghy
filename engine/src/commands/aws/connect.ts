import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { deepMerge, DinghyError, OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { runAwscliImageCmd } from './runAwscliImageCmd.ts'
import { awscliOptions } from './awscliOptions.ts'
import chalk from 'chalk'
import { listConnectableResources } from './list.ts'

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
  const { stackPath, region, resources } = await listConnectableResources(args)
  const instance = resources.find((resource: any, index: number) =>
    `${index + 1}` === args['instance-id']
      ? true
      : resource.instanceId === args['instance-id']
      ? true
      : resource.Name === args['instance-id']
  )
  if (!instance) {
    throw new DinghyError(
      `Instance id ${args['instance-id']} not found in [${
        resources.map((resource: any) =>
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
    stackPath,
    args,
    [
      'aws',
      'ssm',
      'start-session',
      '--region',
      region,
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
