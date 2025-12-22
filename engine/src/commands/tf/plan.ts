import chalk from 'chalk'
import type { CommandArgs, CommandContext, Commands } from '@dinghy/cli'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '@dinghy/cli'
import { hostAppHome, requireStacksConfig } from '@dinghy/cli'
import { doWithTfStacks } from './doWithTfStacks.ts'
import { runTfImageCmd } from './runTfImageCmd.ts'
import { createTfOptions, tfOptionsPlan } from './tfOptions.ts'
import Debug from 'debug'
const debug = Debug('tf:plan')
const options: any = createTfOptions({
  ...tfOptionsPlan,
  cmdDescription: 'Plan changes',
})

const CHANGE_LINE_PREFIX = new Set(['~ ', '+ ', '- ', 'id'])
function collectStackChange(outputFile: string, maxLines: number) {
  const planTxt = Deno.readTextFileSync(outputFile).trim()
  let changesCount = 0
  let summary: string | undefined
  const changes: string[] = []
  if (!planTxt.startsWith('No changes')) {
    const lines = planTxt.split(/\r?\n|\r|\n/g)
    summary = lines.pop()!.split(': ')[1].slice(0, -1).split(',').map((s) => {
      const count = s.trim().split(' ')[0]
      if (count !== '0') {
        changesCount += Number.parseInt(count)
        return s
      }
    }).filter((s) => s).join(',')
    let started = false
    for (const line of lines) {
      if (started && line && !line.trim().startsWith('# (')) {
        const trimmedLine = line.trim()
        if (CHANGE_LINE_PREFIX.has(trimmedLine.slice(0, 2))) {
          if (changes.length === maxLines) {
            changes.push('Ignored more output lines:', '.')
          } else if (
            changes.length > maxLines
          ) {
            changes.push(`${changes.pop()}.`)
          } else {
            changes.push(line.slice(2))
          }
        }
      }

      if (line.endsWith('perform the following actions:')) {
        started = true
      }
    }

    return {
      changesCount,
      summary,
      changes,
    }
  }
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  await requireStacksConfig()
  const changedStacks: any[] = []
  await doWithTfStacks(args, async (tfOptions) => {
    const { stack, stackInfo } = tfOptions
    const maxLines = Number.parseInt(args['diff-changes-max-lines'])
    const stackPath = `${args.output}/${stack.id}`
    debug('Running terraform plan from %s', stackPath)
    await runTfImageCmd(
      stackPath,
      args,
      [
        'tf',
        'plan',
        `-lock=${args.lock}`,
        `-out=${args['plan-file']}`,
      ],
    )
    for (const format of ['json', 'txt']) {
      const planOutputFile = `${hostAppHome}/${stackPath}/${
        args['plan-file']
      }.${format}`
      debug('Formatting plan file to %s', planOutputFile)
      await runTfImageCmd(
        stackPath,
        args,
        [
          'tf',
          'show',
          format === 'json' ? '-json' : '-no-color',
          args['plan-file'],
          '>',
          planOutputFile,
        ],
      )
      console.log('Formated plan ', planOutputFile)
      if (format === 'txt') {
        const changes = collectStackChange(planOutputFile, maxLines)
        stackInfo['stack'].plan = changes
        if (changes?.changesCount) {
          changedStacks.push(stackInfo['stack'])
        }
      }
    }
    const stackInfoFile =
      `${hostAppHome}/${args.output}/${stack.id}/stack-info.json`
    Deno.writeTextFileSync(stackInfoFile, JSON.stringify(stackInfo, null, 2))
    debug('Update stack info %s', stackInfoFile)
  })
  if (changedStacks.length) {
    changedStacks.map((change) => {
      console.log(
        chalk.red(`${change.id} changes: ${change.plan.summary}`),
      )
    })
    console.log(
      chalk.red(`Changes found in ${changedStacks.length} stacks`),
    )
  } else {
    console.log(
      chalk.green(
        `No changes found ${
          args.stack ? `in ${args.stack} stack` : 'in any stack'
        }`,
      ),
    )
  }
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
