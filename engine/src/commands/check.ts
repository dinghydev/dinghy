import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '@dinghy/cli'
import { DinghyError, OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { streamCmd } from '../utils/cmd.ts'
import { hostAppHome } from '@dinghy/cli'
import chalk from 'chalk'
import { hasGitRepo } from '../utils/gitUtils.ts'

const SUPPORTED_CHECKS = ['fmt', 'lint', 'type', 'git']

const options: CommandOptions = {
  string: ['fmtCmd', 'lintCmd', 'typeCmd', 'gitCmd'],
  collect: ['checks'],
  description: {},
  default: {
    checks: SUPPORTED_CHECKS,
    fmtCmd: 'deno fmt',
    lintCmd: 'deno lint',
    typeCmd: 'deno check',
    gitCmd: 'git diff',
  },
  arguments: {
    check: {
      description: 'The checks to run',
      required: false,
    },
  },
  cmdDescription: 'Run static code analysis, available checks: ' +
    SUPPORTED_CHECKS.join(', '),
}

type CheckResult = {
  check: string
  result: any
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  const checks = args.check ? [args.check] : args.checks
  const results: CheckResult[] = []
  for (const check of checks) {
    const command = args[`${check}Cmd`]
    const isGitCheck = check === 'git'
    if (isGitCheck && !(await hasGitRepo())) {
      console.log(
        chalk.yellow(`No git repo found, skipping git check`),
      )
      results.push({
        check: 'git',
        result: {
          exitCode: 0,
        },
      })
      continue
    }

    console.log(`Running ${check} check with command: ${command}...`)
    const result = await streamCmd(
      command.split(' '),
      isGitCheck ? hostAppHome : undefined,
      false,
    )
    if (check === 'git' && result.all) {
      console.log(
        chalk.red(`Unexpected changes detected in git repo`),
      )
      result.exitCode = 1
    }
    results.push({
      check: command,
      result,
    })
  }
  const failedChecks = results.filter((result) => result.result.exitCode !== 0)
  if (failedChecks.length > 0) {
    throw new DinghyError(
      `Failed to run checks [${
        failedChecks.map((result) => result.check).join(', ')
      }], see error above`,
    )
  }
}
export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
