import type { CmdInput } from '@dinghy/cli'
import { cmdStreamAndCapture, DinghyError } from '@dinghy/cli'
import { hostAppHome } from '@dinghy/cli'
import chalk from 'chalk'
import { hasGitRepo } from '../utils/gitUtils.ts'
import { Args } from '@std/cli/parse-args'
import { existsSync } from '@std/fs/exists'

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
      default: 'deno test --no-check',
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

export const run = async (args: Args) => {
  const checks = args.check ? [args.check] : args.checks
  const results: CheckResult[] = []
  for (const check of checks) {
    const command = args[`${check}Cmd`]
    const isGitCheck = check === 'git'
    if (isGitCheck && !(await hasGitRepo())) {
      console.log(
        chalk.yellow(`No git repo found, skipping git check`),
      )
      continue
    }
    if (check === 'test' && !(hasDenoTest())) {
      continue
    }

    console.log(`Running ${check} check with command: ${command}...`)
    const result = await cmdStreamAndCapture(
      command.split(' '),
      false,
      isGitCheck ? hostAppHome : undefined,
    )
    if (check === 'git' && result.output) {
      console.log(
        chalk.red(`Unexpected changes detected in git repo`),
      )
      result.success = false
    }
    results.push({
      check: command,
      result,
    })
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

export const hasDenoTest = () => {
  return existsSync(`${hostAppHome}/__tests__`)
}
