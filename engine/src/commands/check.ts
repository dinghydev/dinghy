import { existsSync } from '@std/fs/exists'
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '@diac/cli'
import { OPTIONS_SYMBOL, DiacError, RUN_SYMBOL } from '@diac/cli'
import { streamCmd } from '../utils/cmd.ts'
import { hostAppHome } from '@diac/cli'
import chalk from 'chalk'

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
    if (check === 'git' && !existsSync(`${hostAppHome}/.git`)) {
      console.log(
        chalk.yellow(`${hostAppHome}/.git not found, skipping git check`),
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
      undefined,
      false,
    )
    if (check === 'git' && result.all) {
      result.exitCode = 1
    }
    results.push({
      check: command,
      result,
    })
  }
  const failedChecks = results.filter((result) => result.result.exitCode !== 0)
  if (failedChecks.length > 0) {
    throw new DiacError(
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
