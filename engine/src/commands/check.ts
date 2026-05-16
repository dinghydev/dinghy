import type { CmdInput } from '@dinghy/cli'
import {
  cmdStreamAndCapture,
  dinghyAppConfig,
  DinghyError,
  hostAppHome,
} from '@dinghy/cli'
import chalk from 'chalk'
import { hasGitRepo } from '../utils/gitUtils.ts'
import { Args } from '@std/cli/parse-args'
import { runTestCheck } from '../services/check/runTest.ts'

const SUPPORTED_CHECKS = ['fmt', 'lint', 'type', 'test', 'git']

export const schema: CmdInput = {
  description: 'Run static code analysis, available checks: ' +
    SUPPORTED_CHECKS.join(', '),
  options: [
    {
      name: 'fmtCmd',
      description: 'The command to run for fmt check',
      default: 'deno fmt',
    },
    {
      name: 'lintCmd',
      description: 'The command to run for lint check',
      default: 'deno lint',
    },
    {
      name: 'typeCmd',
      description: 'The command to run for type check',
      default: 'deno check',
    },
    {
      name: 'testCmd',
      description:
        'The command to run for deno test if `__tests__` folder exists',
      default: 'deno test -A --no-check --cached-only',
    },
    {
      name: 'gitCmd',
      description:
        'The command to run for git diff check if current directory is in a git repo',
      default: 'git diff',
    },
    {
      name: 'checks',
      description: 'The checks to run',
      default: SUPPORTED_CHECKS,
      multiple: true,
    },
  ],
  args: [
    {
      name: 'check',
      description: 'The checks to run',
      required: false,
    },
  ],
}

type CheckResult = {
  check: string
  result: any
}

const isDisabled = (cmd: unknown): cmd is false | null | undefined | '' =>
  !cmd || cmd === 'disabled'

export const run = async (args: Args) => {
  const checks = args.check ? [args.check] : args.checks
  const results: CheckResult[] = []
  for (const check of checks) {
    const cliCmd = args[`${check}Cmd`]
    const configCmd = dinghyAppConfig.check?.[check]?.cmd
    // Use config value when explicitly set, even when it's a falsy disable
    // sentinel (`false` / `''`); only fall through to the cli default when
    // config has not specified anything.
    const command: any = configCmd !== undefined ? configCmd : cliCmd

    if (isDisabled(command)) {
      console.log(chalk.dim(`${check} check disabled, skipping`))
      continue
    }

    const isGitCheck = check === 'git'
    if (isGitCheck && !(await hasGitRepo())) {
      console.log(chalk.yellow(`No git repo found, skipping git check`))
      continue
    }

    if (check === 'test') {
      const testResult = await runTestCheck(command)
      if (testResult === null) continue
      results.push(testResult)
      continue
    }

    const cmdParts = command.split(' ')
    if (isGitCheck) {
      const excludes: string[] = dinghyAppConfig.check?.git?.excludes ?? []
      if (excludes.length > 0) {
        cmdParts.push('--', '.', ...excludes.map((p) => `:(exclude)${p}`))
      }
    }
    console.log(`Running ${check} check with command: ${cmdParts.join(' ')}...`)
    const result = await cmdStreamAndCapture(
      cmdParts,
      false,
      isGitCheck ? hostAppHome : undefined,
    )
    if (check === 'git' && result.output) {
      console.log(chalk.red(`Unexpected changes detected in git repo`))
      result.success = false
    }
    results.push({ check: command, result })
  }
  const failedChecks = results.filter((result) => !result.result.success)
  if (failedChecks.length > 0) {
    throw new DinghyError(
      `Failed to run checks [${
        failedChecks.map((result) => result.check).join(', ')
      }], see error above`,
    )
  }
}
