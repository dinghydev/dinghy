import type { CommandArgs, CommandOptions } from '../../../../cli/src/types.ts'

import { hostAppHome } from '../../../../cli/src/utils/loadConfig.ts'
import { deepMerge } from '../../../../cli/src/utils/index.ts'
import { existsSync } from '@std/fs/exists'
import Debug from 'debug'
const debug = Debug('tfOptions')
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
    stage: {
      description: 'Stage name',
      required: false,
    },
  },
}

export const tfOptionsPlan: CommandOptions = {
  string: ['plan-file', 'diff-changes-max-lines'],
  boolean: ['lock'],
  description: {
    'plan-file': 'Plan file name',
    'diff-changes-max-lines': 'Max lines of diff changes',
    lock: 'Lock the state during plan',
  },
  default: {
    'plan-file': 'tf.plan',
    'diff-changes-max-lines': '10',
  },
}

export const createTfOptions = (options: any) => {
  return deepMerge(deepMerge({}, tfOptions), options) as CommandOptions
}

export const parseTfOptions = (args: CommandArgs, stackOptions: any) => {
  const stack = stackOptions.stack

  const stackInfoPath =
    `${hostAppHome}/${args.output}/${stack.id}-stack-info.json`
  if (!existsSync(stackInfoPath)) {
    debug(`Stack info file not found: ${stackInfoPath}`)
    return null
  }
  const stackInfo = JSON.parse(Deno.readTextFileSync(stackInfoPath))
  const stages: any[] = []
  if (args.stage) {
    let stage: any = Object.values(stack.stages || {}).find(
      (s: any) => s.name === args.stage,
    )
    if (!stage) {
      stage = {
        id: `${stack.id}-${args.stage}`,
        name: args.stage,
      }
      console.warn(`Stage not found, creating ondemand stage ${stage.id}`)
    }
    stages.push(stage)
  } else {
    Object.values(stack.stages || {}).map((stage: any) => {
      if (stage.disabled) {
        debug(`skip diabled stage ${stage.id} is disabled, skipping`)
        return
      }
      stages.push(stage)
    })
  }

  return {
    stack,
    stackInfo,
    stages,
  }
}
