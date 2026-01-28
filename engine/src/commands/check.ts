import type { CmdInput } from '@dinghy/cli'
import { DinghyError } from '@dinghy/cli'
import { streamCmd } from '../utils/cmd.ts'
import { hostAppHome } from '@dinghy/cli'
import chalk from 'chalk'
import { hasGitRepo } from '../utils/gitUtils.ts'
import { Args } from '@std/cli/parse-args'

const SUPPORTED_CHECKS = ['fmt', 'lint', 'type', 'git']

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
      name: 'gitCmd',
      description: 'The command to run for git check',
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
