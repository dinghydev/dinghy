import type { ParseOptions, Args } from '@std/cli'

export type CommandOptions = {
  description: Record<string, string>
  cmdAlias?: string[]
  cmdTitle?: string
  cmdDescription?: string
  hidden?: boolean
  arguments?: Record<string, { description: string; required: boolean }>
} & ParseOptions

export type CommandArgs = {
  description: Record<string, string>
} & Args

export const OPTIONS_SYMBOL = Symbol('options')
export const RUN_SYMBOL = Symbol('run')

export type Command = {
  [OPTIONS_SYMBOL]: CommandOptions
  [RUN_SYMBOL]: (context: CommandContext, args: CommandArgs) => any
}

export type Commands = Command & Record<string, Command>

export type GlobalArgs = {
  args: string[]
  debug: boolean
  help: boolean
}

export type CommandContext = {
  prefix: string[]
  envPrefix: string[]
  args: string[]
  commands: Commands
  options: CommandOptions
}

export const OPTIONS_TYPES = ['boolean', 'string', 'number', 'collect']
