import type { CmdInput } from '@dinghy/cli'
import { DinghyError } from '@dinghy/cli'
import { runAwscliImageCmd } from '../../services/aws/runAwscliImageCmd.ts'
import chalk from 'chalk'
import { listConnectableInstances } from './list.ts'
import { stackArgs } from '../tf/index.ts'
import { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description: 'Connect to a specific instance in the stack',
  options: [
    {
      name: 'instance-id',
      description:
        'The instance id to connect to, could be sequence or actual instance id',
      default: '1',
      alias: 'i',
    },
  ],
  ...stackArgs,
}

export const run = async (args: Args) => {
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
