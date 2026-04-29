import chalk from 'chalk'
import Debug from 'debug'
import { cmdCode, cmdStreamAndCapture } from '../shared/cmd.ts'
import { DinghyError } from '../shared/types.ts'

const debug = Debug('gitUtils')

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

export const runGitCheck = async (cwd: string) => {
  if (!(await hasGitRepo(cwd))) {
    debug('no git repo at %s, skipping git check', cwd)
    return
  }
  console.log('Running git check...')
  const result = await cmdStreamAndCapture(['git', 'diff'], false, cwd)
  if (result.output) {
    console.log(chalk.red('Unexpected changes detected in git repo'))
    throw new DinghyError(
      'Working tree has uncommitted changes — commit or revert them, ' +
        'then re-run.',
      'UNEXPECTED_GIT_DIFF',
    )
  }
}
