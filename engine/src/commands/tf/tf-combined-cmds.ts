import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '@dinghy/cli'
import { doWithStacks, OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import tf from './index.ts'
import { runCommand } from '@dinghy/cli'
import { dinghyAppConfig, hostAppHome, requireStacksConfig } from '@dinghy/cli'
import {
  attachChangeToMR,
  isCi,
  isMr,
  triggerAutoDeployJobs,
} from '../../utils/gitUtils.ts'
import { notifyChanges } from '../../utils/notificationUtils.ts'
import chalk from 'chalk'
import { parseTfOptions } from './tfOptions.ts'
import render from '../render/index.ts'

const options: CommandOptions = {
  boolean: ['debug'],
  collect: ['stage'],
  description: {
    stage: 'Stages to work with',
  },
  arguments: {
    stack: {
      description: 'Stack name',
      required: false,
    },
  },
}

const runStackTfCommands = async (
  stack: string,
  tfCommand: string,
  args: string[],
) => {
  await runCommand({
    isEngine: true,
    prefix: ['tf'],
    envPrefix: ['tf'],
    args: [tfCommand, stack, ...args],
    originalArgs: ['tf', tfCommand, stack, ...args],
    commands: tf,
    options: tf[OPTIONS_SYMBOL],
  })
}

export const createCombinedTfCmds = (
  cmdDescription: string,
  cmds: string[],
) => {
  const runStackCommands = async (stack: string, args: string[]) => {
    for (const cmd of cmds) {
      await runStackTfCommands(stack, cmd, args)
    }
  }

  const run = async (context: CommandContext, args: CommandArgs) => {
    await requireStacksConfig()
    const remainArgs = context.originalArgs.slice(2)
    const noneStackArgs = args.stack ? remainArgs.slice(1) : remainArgs
    const activedStackIds: string[] = []

    const stacksOptions: any = {}
    await doWithStacks(
      dinghyAppConfig,
      args.stack,
      async (stackOptions: any) => {
        const renderArgs = [
          'render',
          stackOptions.stack.id,
          '--format',
          'tf',
          ...noneStackArgs,
        ]
        await runCommand({
          ...context,
          prefix: [],
          envPrefix: [],
          args: renderArgs,
          originalArgs: renderArgs,
          commands: { render } as any,
          options: render[OPTIONS_SYMBOL],
        })
        stacksOptions[stackOptions.stack.id] = stackOptions
      },
    )

    for (const stackOptions of Object.values(stacksOptions)) {
      const tfOptions = parseTfOptions(args, stackOptions)
      if (tfOptions) {
        const { stack } = tfOptions
        if (
          args.stack ||
          !isCi() ||
          (isMr() && stack.mrAutoDiff) ||
          (!isMr() && stack.mainAutoDiff)
        ) {
          activedStackIds.push(stack.id)
          await runStackCommands(stack.id, noneStackArgs)
        }
      }
    }

    const changedStacks: any[] = []
    const changedStages: any[] = []
    for (const stackId of activedStackIds) {
      const stackInfoFile =
        `${hostAppHome}/${args.output}/${stackId}-stack-info.json`
      const stackInfo = JSON.parse(Deno.readTextFileSync(stackInfoFile))
      for (const stage of Object.values(stackInfo.stages)) {
        if ((stage as any).plan?.changesCount) {
          changedStages.push(stage)
          const { stack } = stacksOptions[stackId]
          if (!changedStacks.includes(stack)) {
            changedStacks.push(stack)
          }
        }
      }
    }
    if (changedStacks.length) {
      const isApply = cmds.includes('apply')
      if (isCi()) {
        const changeAction = isMr() ? attachChangeToMR : notifyChanges
        await changeAction(changedStages)
        if (!isApply) {
          await triggerAutoDeployJobs(changedStacks, args)
        }
      } else {
        console.log(
          `Ignore notification ${
            isApply ? 'and auto deploy ' : ''
          }in non-CI environment`,
        )
      }
    } else if (Object.values(stacksOptions).length > 1) {
      console.log(chalk.green('No changes found in any stack'))
    }
  }

  return {
    [OPTIONS_SYMBOL]: {
      ...options,
      cmdDescription,
    },
    [RUN_SYMBOL]: run,
  } as Command
}
