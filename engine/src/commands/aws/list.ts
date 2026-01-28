import type { CmdInput } from '@dinghy/cli'
import { DinghyError, hostAppHome, requireStacksConfig } from '@dinghy/cli'
import { doWithTfStacks } from '../../services/tf/doWithTfStacks.ts'
import { existsSync } from '@std/fs/exists'
import { printTable } from 'console-table-printer'
import { loadUrlData } from '../../utils/loadUrlData.ts'
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
    if (error?.toString().includes('NoSuchKey')) {
      throw new DinghyError(
        'Output file not found in s3, you may need to run perform tf operation first to create the resources!',
      )
    } else {
      console.log(error)
      throw new DinghyError('Failed to load stack output')
    }
  }
  const instances = Object.values(stackOutput).filter((
    value,
  ) => typeof value === 'object' && (value as any).InstanceId).map((
    value,
    index: number,
  ) => ({
    '#': index + 1,
    ...(value as any),
  }))
  if (instances.length === 0) {
    console.log('Stack output:', stackOutput)
    throw new DinghyError('No instance ids found in stack output')
  }
  return instances
}

export const run = async (args: Args) => {
  const instances = await listConnectableInstances(args)
  console.log('Connectable instances:')
  printTable(instances.map((instance) => {
    delete instance.Region
    return instance
  }))
}
