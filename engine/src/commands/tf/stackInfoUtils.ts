import type { CommandArgs, CommandOptions } from '@dinghy/cli'

import { hostAppHome } from '@dinghy/cli'
import { deepMerge } from '@dinghy/cli'
import { existsSync } from '@std/fs/exists'
import Debug from 'debug'
const debug = Debug('stackInfoUtils')
export const tfOptions: CommandOptions = {
  boolean: ['debug'],
  collect: ['tf-options'],
  description: {
    'tf-options': 'Additional tf options',
  },
  arguments: {
    stack: {
      description: 'Stack name',
      required: false,
    },
  },
}

export const tfOptionsPlan: CommandOptions = {
  string: ['diff-changes-max-lines'],
  boolean: ['lock'],
  description: {
    'diff-changes-max-lines': 'Max lines of diff changes',
    lock: 'Lock the state during plan',
  },
  default: {
    'diff-changes-max-lines': '10',
  },
}

export const createTfOptions = (options: any) => {
  return deepMerge(deepMerge({}, tfOptions), options) as CommandOptions
}

export const parseStackInfo = (args: CommandArgs, renderOptions: any) => {
  const stack = renderOptions.stack

  const stackInfoPath =
    `${hostAppHome}/${args.output}/${stack.name}/stack.info.json`
  if (!existsSync(stackInfoPath)) {
    return null
  }
  const stackInfo = JSON.parse(Deno.readTextFileSync(stackInfoPath))
  debug('loaded %s %O', stackInfoPath, stackInfo)
  return {
    ...stack,
    ...stackInfo,
  }
}

const CHANGE_LINE_PREFIX = new Set(['~ ', '+ ', '- ', 'id'])
export function collectStackChanges(stack: any, args: CommandArgs) {
  const maxLines = Number.parseInt(args['diff-changes-max-lines'])
  const outputFile = `${hostAppHome}/${args.output}/${stack.name}/tf.plan.txt`
  debug('collectStackChanges from %s', outputFile)
  const planTxt = Deno.readTextFileSync(outputFile).trim()
  let changesCount = 0
  let summary: string | undefined
  const changes: string[] = []
  if (!planTxt.startsWith('No changes')) {
    const lines = planTxt.split(/\r?\n|\r|\n/g)
    let started = false
    for (const line of lines) {
      if (line.startsWith('Plan: ')) {
        summary = line.split(': ')[1].slice(0, -1).split(',').map((s) => {
          const count = s.trim().split(' ')[0]
          if (count !== '0') {
            changesCount += Number.parseInt(count)
            return s
          }
        }).filter((s) => s).join(',')
        continue
      }
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

    if (summary) {
      return {
        changesCount,
        summary,
        changes,
      }
    }
  }
}
