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
      name: 'id',
      description:
        'The id to connect to, could be sequence number, instance id (EC2), or task id (ECS)',
      default: '1',
      alias: 'i',
    },
    {
      name: 'container',
      description:
        'For ECS services, the container name to exec into (defaults to the first container)',
      alias: 'c',
    },
  ],
  ...stackArgs,
}

const connectToEc2Instance = async (args: Args, instance: any) => {
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

const connectToTaskContainer = async (args: Args, instance: any) => {
  const container = (args.container as string | undefined) ??
    instance.Containers[0]
  if (!instance.Containers.includes(container)) {
    throw new DinghyError(
      `Container ${container} not found in service ${instance.Name} (available: ${
        instance.Containers.join(', ')
      })`,
    )
  }
  const taskArn = instance.Task
  if (!taskArn) {
    throw new DinghyError(
      `No running tasks found for service ${instance.Name} in cluster ${instance.Cluster}`,
    )
  }
  console.log(
    `Connecting to ${chalk.green(`${instance.Name}/${container}`)} ...`,
  )
  await runAwscliImageCmd(
    args,
    [
      'aws',
      'ecs',
      'execute-command',
      '--region',
      instance.Region,
      '--cluster',
      instance.Cluster,
      '--task',
      taskArn,
      '--container',
      container,
      '--interactive',
      '--command',
      '/bin/sh',
    ],
  )
}

export const run = async (args: Args) => {
  const instances = await listConnectableInstances(args)
  const id = args.id
  const instance = instances.find((instance: any, index: number) =>
    `${index + 1}` === id
      ? true
      : instance.InstanceId === id
      ? true
      : typeof instance.Task === 'string' && instance.Task.endsWith(`/${id}`)
      ? true
      : instance.Name === id
  )
  if (!instance) {
    throw new DinghyError(
      `Id ${id} not found in [${
        instances.map((resource: any) =>
          `${resource.Name}: ${
            resource.InstanceId ?? resource.Task ??
              resource.Containers
          }`
        ).join(', ')
      }]`,
    )
  }

  if (Array.isArray(instance.Containers)) {
    await connectToTaskContainer(args, instance)
  } else {
    await connectToEc2Instance(args, instance)
  }
}
