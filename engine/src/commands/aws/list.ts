import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import {
  DinghyError,
  hostAppHome,
  OPTIONS_SYMBOL,
  requireStacksConfig,
  RUN_SYMBOL,
} from '@dinghy/cli'
import { awscliOptions } from './awscliOptions.ts'
import { doWithTfStacks } from '../tf/doWithTfStacks.ts'
import { existsSync } from '@std/fs/exists'
import { s3GetFile } from '../../utils/s3.ts'
import { printTable } from 'console-table-printer'
import Debug from 'debug'
const debug = Debug('aws:list')

const options: any = {
  ...awscliOptions,
  cmdDescription: 'List connectable instances in the stack',
}

export const listConnectableResources = async (
  args: CommandArgs,
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

  const s3Object = parseS3ObjectUrl(stackOutputUrl)
  let s3ObjectContent
  try {
    s3ObjectContent = await s3GetFile(
      s3Object.region,
      s3Object.bucket,
      s3Object.key,
    )
    debug('s3ObjectContent %O', s3ObjectContent)
  } catch (error) {
    if (error?.toString().includes('NoSuchKey')) {
      throw new DinghyError(
        'Output file not found in s3, you may need to run perform tf operation first to create the resources!',
      )
    } else {
      console.log(error)
      throw new DinghyError('Failed to get stack output from s3')
    }
  }
  const s3ObjectContentJson = JSON.parse(s3ObjectContent)
  const resources = Object.entries(s3ObjectContentJson).filter((
    [key, _value],
  ) => key.includes('_instanceid')).map(([key, value], index: number) => ({
    '#': index + 1,
    Name: key.replace('_instanceid', ''),
    InstanceId: value,
  }))
  if (resources.length === 0) {
    console.log('Stack output:', s3ObjectContentJson)
    throw new DinghyError('No instance ids found in stack output')
  }
  return { stackPath, region: s3Object.region, resources }
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  const { resources } = await listConnectableResources(args)
  console.log('Connectable instances:')
  printTable(resources)
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands

function parseS3ObjectUrl(url: string) {
  debug('parseS3ObjectUrl %s', url)
  const parts = url.split('/')
  const region = parts[2].split('.')[1]
  const bucket = parts[3]
  const key = parts.slice(4).join('/')
  return { region, bucket, key }
}
