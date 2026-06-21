import chalk from 'chalk'
import Debug from 'debug'
import { existsSync } from '@std/fs'
import { cmdCode, cmdStreamAndCapture } from '../shared/cmd.ts'
import { DinghyError } from '../shared/types.ts'
import { dinghyAppConfig } from './loadConfig.ts'
import { HOST_USER_HOME_PATH } from './dockerUtils.ts'
import { hostAppHome, hostUserHome } from '../shared/home.ts'

const debug = Debug('gitUtils')

const resolveCwd = (): string => {
  if (existsSync(HOST_USER_HOME_PATH) && hostAppHome.startsWith(hostUserHome)) {
    return HOST_USER_HOME_PATH + hostAppHome.slice(hostUserHome.length)
  }
  return hostAppHome
}

export const mrId = () => Deno.env.get('CI_MERGE_REQUEST_IID')

export const isCi = () => Deno.env.get('CI') === 'true'
export const isMr = () => mrId() !== undefined
export const jobName = () =>
  Deno.env.get('CI_JOB_NAME') || `dinghy ${Deno.args.join(' ')}`

export const hasGitRepo = async (cwd?: string) => {
  const result = await cmdCode(
    ['git', 'rev-parse', '--show-toplevel'],
    false,
    cwd,
  )
  return result.success
}

export type GitCheckResult =
  & Awaited<ReturnType<typeof cmdStreamAndCapture>>
  & { success: boolean }

export const runGitCheck = async (
  gitCmd: string = 'git diff',
  errorWhenDiff: boolean = false,
): Promise<GitCheckResult | null> => {
  if (!isCi()) {
    console.log('Skipping git check (not running in CI)')
    return null
  }
  if (Deno.env.get('CI_SKIP_GIT_DIFF_CHECK')) {
    debug('CI_SKIP_GIT_DIFF_CHECK is set, skipping git check')
    return null
  }
  const cwd = resolveCwd()
  if (!(await hasGitRepo(cwd))) {
    console.log('no git repo at %s, skipping git check', cwd)
    return null
  }
  const cmdParts = gitCmd.split(' ')
  const excludes: string[] = dinghyAppConfig.check?.git?.excludes ?? []
  if (excludes.length > 0) {
    cmdParts.push('--', '.', ...excludes.map((p) => `:(exclude)${p}`))
  }
  console.log(`Running git check with command: ${cmdParts.join(' ')}...`)
  const result = await cmdStreamAndCapture(
    cmdParts,
    false,
    cwd,
  ) as GitCheckResult
  if (result.output) {
    console.log(chalk.red('Unexpected changes detected in git repo'))
    result.success = false
    if (errorWhenDiff) {
      throw new DinghyError(
        'Working tree has uncommitted changes — commit or revert them, ' +
          'then re-run.',
        'UNEXPECTED_GIT_DIFF',
      )
    }
  }
  return result
}
