import { execa } from 'execa'
import Debug from 'debug'
import { containerAppHome } from '../shared/home.ts'
import { DinghyError } from '../types.ts'
Debug.formatters.a = (v: any) => {
  return `[${v.join(' ')}]`
}
const debug = Debug('cmd')

export const cmdStream = async (
  args: string[] | string,
  errorOnFailure = false,
  cwd?: string,
) => {
  return await execCmd(args, ['pipe', 'inherit'], errorOnFailure, cwd)
}

export const cmdInherit = async (
  args: string[] | string,
  errorOnFailure = false,
  cwd?: string,
) => {
  return await execCmd(args, ['inherit'], errorOnFailure, cwd)
}

export const cmdOutput = async (
  args: string[] | string,
  errorOnFailure = false,
  cwd?: string,
) => {
  return await execCmd(args, ['pipe'], errorOnFailure, cwd)
}

export const cmdCode = async (
  args: string[] | string,
  errorOnFailure = false,
  cwd?: string,
) => {
  return await execCmd(args, ['ignore'], errorOnFailure, cwd)
}

const execCmd = async (
  args: string[] | string,
  ioOption: any,
  errorOnFailure: boolean,
  cwd?: string,
) => {
  if (typeof args === 'string') {
    args = args.split(' ')
  }
  const workingDir = cwd || containerAppHome
  debug('execCmd %a from %s', args, containerAppHome)
  const result = await execa(args[0], args.slice(1), {
    stdin: 'inherit',
    stdout: ioOption,
    stderr: ioOption,
    all: true,
    cwd: workingDir,
    shell: true,
    reject: false,
  })
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
  const resultObj = { success: result.exitCode === 0, output: result.all }
  debug('execCmd result: %o', resultObj)
  return resultObj
}
