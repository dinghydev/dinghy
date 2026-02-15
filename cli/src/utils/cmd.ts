import { execa, execaSync } from 'execa'
import Debug from 'debug'
import { containerAppHome } from '../shared/home.ts'
import { DinghyError } from '../types.ts'
Debug.formatters.a = (v: any) => {
  return `[${v.join(' ')}]`
}
const debug = Debug('cmd')

export const cmdStreamAndCapture = async (
  args: string[] | string,
  errorOnFailure = false,
  cwd?: string,
  sync = false,
) => {
  return await execCmd(args, ['pipe', 'inherit'], errorOnFailure, cwd, sync)
}

export const cmdStream = async (
  args: string[] | string,
  errorOnFailure = false,
  cwd?: string,
  sync = false,
) => {
  return await execCmd(args, ['inherit'], errorOnFailure, cwd, sync)
}

export const cmdCapture = async (
  args: string[] | string,
  errorOnFailure = false,
  cwd?: string,
  sync = false,
) => {
  return await execCmd(args, ['pipe'], errorOnFailure, cwd, sync)
}

export const cmdCode = async (
  args: string[] | string,
  errorOnFailure = false,
  cwd?: string,
  sync = false,
) => {
  return await execCmd(args, ['ignore'], errorOnFailure, cwd, sync)
}

const execCmd = async (
  args: string[] | string,
  ioOption: any,
  errorOnFailure: boolean,
  cwd?: string,
  sync?: boolean,
) => {
  if (typeof args === 'string') {
    args = args.split(' ')
  }
  const workingDir = cwd || containerAppHome
  debug('execCmd from %s with %a: %a', workingDir, ioOption, args)
  const execOptions: any = {
    stdin: 'inherit',
    stdout: ioOption,
    stderr: ioOption,
    all: true,
    cwd: workingDir,
    reject: false,
  }
  const result = sync
    ? execaSync(args[0], args.slice(1), execOptions)
    : await execa(args[0], args.slice(1), execOptions)
  if (result.exitCode !== 0) {
    debug(
      'Failed (exit code: %s) command: (cd %s; %s)',
      result.exitCode,
      workingDir,
      args.join(' '),
    )
    if (result.all) {
      debug(
        'Output: %s',
        result.all,
      )
    }
    if (errorOnFailure) {
      throw new DinghyError()
    }
  }
  const resultObj = {
    success: result.exitCode === 0,
    output: result.all as unknown as string,
  }
  debug('execCmd result: %o', resultObj)
  return resultObj
}
