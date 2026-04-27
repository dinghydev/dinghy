import type { CmdInput } from '@dinghy/cli'
import { DinghyError, hostAppHome, requireStacksConfig } from '@dinghy/cli'
import { doWithTfStacks } from '../../services/tf/doWithTfStacks.ts'
import { existsSync } from '@std/fs/exists'
import { Table } from 'console-table-printer'
import { loadUrlData } from '../../utils/loadUrlData.ts'
import {
  DescribeTasksCommand,
  ECSClient,
  ListTasksCommand,
} from '@aws-sdk/client-ecs'
import Debug from 'debug'
import { Args } from '@std/cli/parse-args'
import { stackArgs } from '../tf/index.ts'
const debug = Debug('aws:list')

export const schema: CmdInput = {
  description: 'List connectable instances in the stack',
  ...stackArgs,
}

export const listConnectableInstances = async (
  args: Args,
) => {
  await requireStacksConfig()
  let firstStack: any = null
  // deno-lint-ignore require-await
  await doWithTfStacks(args, async (stackInfo) => {
    if (!firstStack) {
      firstStack = stackInfo
    }
  })
  if (!firstStack) {
    throw new DinghyError('No stack found')
  }
  let stackPath = `${args.output}/${firstStack.name}`
  if (!stackPath.startsWith('/')) {
    stackPath = `${hostAppHome}/${stackPath}`
  }
  if (!existsSync(stackPath)) {
    throw new DinghyError(
      `Stack folder ${stackPath} not exist. Run tf operation first`,
    )
  }
  const stackOutputUrl = firstStack.outputs?.stack
  if (!stackOutputUrl) {
    throw new DinghyError('Stack output url not found')
  }

  let stackOutput
  try {
    stackOutput = await loadUrlData(stackOutputUrl, stackPath)
    debug('stackOutput %O', stackOutput)
  } catch (error) {
    const errorMessage = error?.toString()
    if (
      errorMessage?.includes('NoSuchKey') ||
      errorMessage?.includes('File not found')
    ) {
      throw new DinghyError(
        'Stack output file not found, you may need to perform tf operation first to create the resources!',
      )
    } else {
      console.log(error)
      throw new DinghyError('Failed to load stack output')
    }
  }
  const stackRegion = parseRegionFromUrl(stackOutputUrl)
  const rawItems = Object.values(stackOutput).filter((
    value,
  ) =>
    typeof value === 'object' &&
    ((value as any).InstanceId || (value as any).Containers)
  ).map((value) => ({
    Region: stackRegion,
    ...(value as any),
  }))
  if (rawItems.length === 0) {
    console.log('Stack output:', stackOutput)
    throw new DinghyError('No connectable resources found in stack output')
  }
  // Fan out one row per running task for ECS services. EC2 items are kept as-is.
  // Resolve task summaries in parallel but emit the expanded rows in the
  // original raw order so `#` numbering is stable across runs.
  const tasksByIndex = await Promise.all(
    rawItems.map((item) =>
      Array.isArray(item.Containers) && item.Cluster
        ? fetchEcsTasks(item.Region, item.Cluster, item.Name)
        : Promise.resolve(null)
    ),
  )
  const expanded: any[] = []
  rawItems.forEach((item, i) => {
    const tasks = tasksByIndex[i]
    if (tasks === null) {
      expanded.push(item)
    } else if (tasks.length === 0) {
      expanded.push({ ...item, Task: undefined, CreatedAt: undefined })
    } else {
      for (const task of tasks) {
        expanded.push({ ...item, Task: task.arn, CreatedAt: task.createdAt })
      }
    }
  })
  // Sort rows globally by CreatedAt ascending (oldest first); rows without a
  // CreatedAt (EC2 instances, ECS services with no running task) sink to the
  // bottom so they don't disturb the chronological view of running tasks.
  expanded.sort((a, b) => {
    const aTime = a.CreatedAt instanceof Date ? a.CreatedAt.getTime() : Infinity
    const bTime = b.CreatedAt instanceof Date ? b.CreatedAt.getTime() : Infinity
    return aTime - bTime
  })
  return expanded.map((item, index) => ({ '#': index + 1, ...item }))
}

type EcsTaskSummary = { arn: string; createdAt?: Date }

const fetchEcsTasks = async (
  region: string,
  cluster: string,
  serviceName: string,
): Promise<EcsTaskSummary[]> => {
  const client = new ECSClient({ region })
  const listResponse = await client.send(
    new ListTasksCommand({
      cluster,
      serviceName,
      desiredStatus: 'RUNNING',
    }),
  )
  const taskArns = listResponse.taskArns ?? []
  if (taskArns.length === 0) return []
  const describeResponse = await client.send(
    new DescribeTasksCommand({ cluster, tasks: taskArns }),
  )
  const byArn = new Map(
    (describeResponse.tasks ?? []).map((t) => [t.taskArn!, t]),
  )
  return taskArns.map((arn) => ({
    arn,
    createdAt: byArn.get(arn)?.createdAt,
  }))
}

const parseRegionFromUrl = (url: string): string | undefined => {
  // Mirrors the patterns parsed in loadUrlData.ts:
  //   https://<bucket>.s3.<region>.amazonaws.com/<key>
  //   https://s3.<region>.amazonaws.com/<bucket>/<key>
  const m1 = url.match(
    /^https:\/\/[^.]+\.s3[.-]([a-z0-9-]+)\.amazonaws\.com\//,
  )
  if (m1) return m1[1]
  const m2 = url.match(/^https:\/\/s3[.-]([a-z0-9-]+)\.amazonaws\.com\//)
  if (m2) return m2[1]
  return undefined
}

export const run = async (args: Args) => {
  const instances = await listConnectableInstances(args)
  const hasEcs = instances.some((i) => Array.isArray(i.Containers))
  const heading = hasEcs ? 'Connectable containers:' : 'Connectable instances:'
  console.log(heading)
  const rows = instances.map((instance) => {
    const {
      '#': hash,
      Name,
      Task,
      CreatedAt,
      Containers,
      Region: _Region,
      Cluster: _Cluster,
      ...rest
    } = instance
    const isEcs = Array.isArray(Containers)
    // ECS column order: #, Name, Task, Containers, CreatedAt.
    // EC2 column order: #, Name, then resource-specific columns
    // (InstanceId/PublicIp). Task/CreatedAt are omitted for EC2.
    if (isEcs) {
      return {
        '#': hash,
        Name,
        Task: typeof Task === 'string' ? Task.split('/').pop() : Task,
        Containers: Containers.join(', '),
        CreatedAt: CreatedAt instanceof Date
          ? CreatedAt.toISOString().replace('T', ' ').slice(0, 19) + 'Z'
          : CreatedAt,
      }
    }
    return {
      '#': hash,
      Name,
      ...rest,
    }
  })
  const table = new Table({
    defaultColumnOptions: { alignment: 'left' },
    rows,
  })
  table.printTable()
}
