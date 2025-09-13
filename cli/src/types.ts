import type { Args, ParseOptions } from '@std/cli'

export type CommandOptions = {
  required?: string[]
  flagsHidden?: string[]
  description: Record<string, string>
  cmdAlias?: string[]
  cmdTitle?: string
  cmdDescription?: string
  hidden?: boolean
  arguments?: Record<
    string,
    { description: string; required?: boolean; default?: string }
  >
  additionalOptions?: Record<string, any>
} & ParseOptions

export type CommandArgs = {
  description: Record<string, string>
  originalArgs: string[]
} & Args

export const OPTIONS_SYMBOL = Symbol('options')
export const RUN_SYMBOL = Symbol('run')
export const REQUIRE_ENGINE_SYMBOL = Symbol('requireEngine')

export type Command = {
  [OPTIONS_SYMBOL]: CommandOptions
  [RUN_SYMBOL]: (context: CommandContext, args: CommandArgs) => any
  [REQUIRE_ENGINE_SYMBOL]?: boolean
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
  originalArgs: string[]
  commands: Commands
  isEngine: boolean
  options: CommandOptions
}

export class DinghyError extends Error {
  code?: string
  constructor(message: string, code?: string) {
    super(message)
    this.name = 'DinghyError'
    this.code = code
    Object.setPrototypeOf(this, DinghyError.prototype)
  }
}

export const throwDinghyError = (message: string, code?: string) => {
  throw new DinghyError(message, code)
}

export const HANDLED_ERROR_EXIT_CODE = 66
