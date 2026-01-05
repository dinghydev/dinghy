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
import { parseStackInfo } from './parseStackInfo.ts'
import render from '../render/index.ts'
import { githubOutputPath } from '@dinghy/cli'
import Debug from 'debug'
import { onEvent } from '@dinghy/base-components'
const debug = Debug('tf:tf-combined-cmds')

const options: CommandOptions = {
  boolean: ['debug'],
  description: {},
  arguments: {
    stack: {
      description: 'Stack name',
      required: false,
    },
  },
}

const runStackTfCommands = async (
  context: CommandContext,
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
    rootCommands: context.rootCommands,
    options: tf[OPTIONS_SYMBOL],
  })
}

export const createCombinedTfCmds = (
  cmdDescription: string,
  cmds: string[],
) => {
  const runStackCommands = async (
    context: CommandContext,
    stack: string,
    args: string[],
  ) => {
    for (const cmd of cmds) {
      if (cmd === 'render') {
        continue
      }
      await onEvent(`tf.stack.${cmd}.start`, stack)
      try {
        await runStackTfCommands(context, stack, cmd, args)
        await onEvent(`tf.stack.${cmd}.finish`, stack)
      } catch (e) {
        await onEvent(`tf.stack.${cmd}.failed`, stack, e)
        throw e
      }
    }
  }

  const run = async (context: CommandContext, args: CommandArgs) => {
    debug('run combined tf commands')
    await requireStacksConfig()
    const remainArgs = context.originalArgs.slice(2)
    const noneStackArgs = args.stack ? remainArgs.slice(1) : remainArgs
    const activedStackIds: string[] = []
    const changedStacks: any[] = []
    const isApply = cmds.includes('apply')

    const stacksOptions: any = {}
    await onEvent(`tf.render.start`)
    await doWithStacks(
      dinghyAppConfig,
      args.stack,
      async (stackOptions: any) => {
        if (cmds.includes('render')) {
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
        }
        stacksOptions[stackOptions.stack.id] = stackOptions
      },
    )
    await onEvent(`tf.render.finish`, stacksOptions)

    await onEvent(`tf.stacks.start`, stacksOptions)
    for (const stackOptions of Object.values(stacksOptions)) {
      const stackInfo = parseStackInfo(args, stackOptions)
      if (stackInfo) {
        if (
          args.stack ||
          !isCi() ||
          (isMr() && stackInfo.mrAutoDiff) ||
          (!isMr() && stackInfo.mainAutoDiff)
        ) {
          activedStackIds.push(stackInfo.id)
          await onEvent(`tf.stack.start`, stackOptions, stackInfo)
          await runStackCommands(context, stackInfo.id, noneStackArgs)

          const stackInfoFile =
            `${hostAppHome}/${args.output}/${stackInfo.id}/stack-info.json`
          const updatedStackInfo = JSON.parse(
            Deno.readTextFileSync(stackInfoFile),
          )
          if ((updatedStackInfo as any).plan?.changesCount) {
            changedStacks.push(updatedStackInfo)
            await onEvent(
              `tf.stack.changes.${isApply ? 'applied' : 'detected'}`,
              updatedStackInfo,
            )
          }
          await onEvent(`tf.stack.finish`, stackOptions, stackInfo)
        }
      }
    }
    for (const stackId of activedStackIds) {
      const stackInfoFile =
        `${hostAppHome}/${args.output}/${stackId}/stack-info.json`
      const stackInfo = JSON.parse(Deno.readTextFileSync(stackInfoFile))
      if ((stackInfo as any).plan?.changesCount) {
        changedStacks.push(stackInfo)
      }
    }

    if (changedStacks.length) {
      await onEvent(
        `tf.stacks.changes.${isApply ? 'applied' : 'detected'}`,
        changedStacks,
      )
      if (isCi()) {
        const changeAction = isMr() ? attachChangeToMR : notifyChanges
        await changeAction(changedStacks)
        if (!isApply) {
          const githubOutput = githubOutputPath()
          if (githubOutput) {
            const pendingChanges = 'pending_changes=true\n'
            debug('append to %s with %s', githubOutput, pendingChanges)
            Deno.writeTextFileSync(githubOutput, pendingChanges, {
              append: true,
            })
          }
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
    await onEvent(`tf.stacks.finish`, stacksOptions)
  }

  return {
    [OPTIONS_SYMBOL]: {
      ...options,
      cmdDescription,
    },
    [RUN_SYMBOL]: run,
  } as Command
}
