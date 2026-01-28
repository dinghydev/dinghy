import { parseArgs } from '@std/cli/parse-args'
import { DinghyError } from '../../types.ts'
import {
  CMD_DEF_SYMBOL,
  CmdDefinition,
  OptionInput,
  OptionSchema,
  OptionType,
} from './types.ts'
import { deepResolve } from '../../shared/deepResolve.ts'
import { useEnvVar } from '../../utils/loadConfig.ts'
import Debug from 'debug'
import { showHelp } from './showHelp.ts'
import chalk from 'chalk'
import { runEngineCommand } from '../../utils/runEngineCommand.ts'

const debug = Debug('runCommands')

const collectPotentialCommands = (args: string[]) => {
  const collected: string[] = []
  for (const arg of args) {
    if (arg.startsWith('-')) {
      break
    }
    collected.push(arg)
  }
  return collected
}

export const runCommands = async (
  args: string[],
  commands: any,
  isEngine: boolean,
) => {
  if (!isEngine && args.includes('--engine-command')) {
    return await runEngineCommand(args as any)
  }

  let globalOptions: OptionInput[] = [
    ...((commands[CMD_DEF_SYMBOL] as CmdDefinition)?.globalOptions || []),
  ]
  const potentialCommands = collectPotentialCommands(args)
  let i = 0
  for (; i < potentialCommands.length; i++) {
    const cmd = commands[potentialCommands[i]]
    if (cmd) {
      const cmdGlobalOptions = cmd[CMD_DEF_SYMBOL]?.globalOptions
      if (cmdGlobalOptions) {
        globalOptions = [...globalOptions, ...cmdGlobalOptions]
      }
      commands = cmd
    } else {
      const cmdDef = commands[CMD_DEF_SYMBOL] as CmdDefinition
      if (!cmdDef || !cmdDef.schema.args) {
        if (!isEngine) {
          return await runEngineCommand(args)
        }
        throw new DinghyError(
          `Command [${
            chalk.red(potentialCommands.slice(0, i + 1).join(' '))
          }] not found`,
        )
      }
      break
    }
  }
  const cmdDef = commands[CMD_DEF_SYMBOL] as CmdDefinition
  if (!cmdDef) {
    if (Object.keys(commands).length > 0) {
      await showHelp(
        { name: args.slice(0, i), schema: {} } as any,
        commands,
        isEngine,
      )
      return
    } else {
      throw new DinghyError(
        `Command [${
          chalk.red(potentialCommands.slice(0, i + 1).join(' '))
        }] not defined`,
      )
    }
  }
  const remainingArgs = args.slice(i)
  return await runCommand(
    remainingArgs,
    cmdDef,
    commands,
    isEngine,
    globalOptions,
    args,
  )
}

const runCommand = async (
  args: string[],
  cmdDef: CmdDefinition,
  parent: any,
  isEngine: boolean,
  globalOptions: OptionInput[],
  originalArgs: string[],
) => {
  const cmd = cmdDef.schema
  const argOptions = {
    '--': true,
    collect: [] as string[],
    string: [] as string[],
    boolean: [] as string[],
    negatable: [] as string[],
    default: {} as Record<string, any>,
    description: {} as Record<string, string>,
    alias: {} as Record<string, string>,
  }
  const allOptions = [...globalOptions, ...(cmd.options || [])].reverse()
  const globalOptionsKeys: string[] = globalOptions.map((option: OptionInput) =>
    option.name
  )
  const addedOptionsKeys: string[] = []
  OptionSchema.array().parse(allOptions).forEach((option: OptionType) => {
    if (option.name === 'debug') {
      // debug option already processed during startup process
      return
    }
    if (addedOptionsKeys.includes(option.name)) {
      return
    } else {
      addedOptionsKeys.push(option.name)
    }
    if (option.boolean) {
      argOptions.boolean.push(option.name)
      if (option.negatable) {
        argOptions.negatable.push(option.name)
      }
    } else {
      if (option.multiple) {
        argOptions.collect.push(option.name)
      } else {
        argOptions.string.push(option.name)
      }
    }
    argOptions.description[option.name] = option.description
    if (option.alias) {
      argOptions.alias[option.alias] = option.name
    }
    argOptions.default[option.name] = () => {
      let value: any = undefined
      if (option.env) {
        if (typeof option.env === 'string') {
          value = useEnvVar([option.env])
        } else if (globalOptionsKeys.includes(option.name)) {
          value = useEnvVar(['dinghy', option.name])
        } else {
          value = useEnvVar(['dinghy', ...cmdDef.name, option.name])
        }
      }

      if (value !== undefined) {
        if (option.boolean) {
          value = Boolean(value)
        } else if (option.multiple) {
          const splitter = value.includes(',') ? ',' : ' '
          value = value.split(splitter).map((v: string) => v.trim())
        }
      } else {
        if (option.default === undefined) {
          if (option.boolean) {
            value = false
          } else {
            if (option.required) {
              throw new DinghyError(
                `Option [${option.name}] is required`,
              )
            }
          }
        } else {
          value = option.default
        }
      }
      return value
    }
  })
  const parsedOptions: any = parseArgs(args, argOptions)
  deepResolve(parsedOptions)
  const extraOptions = [...parsedOptions['_']]
  cmdDef.schema.args?.forEach((arg) => {
    let argValue = extraOptions.shift()
    if (argValue === undefined) {
      if (arg.default === undefined) {
        if (arg.required) {
          throw new DinghyError(
            `Argument [${arg.name.toLocaleUpperCase()}] is required`,
          )
        }
      } else {
        argValue = arg.default
      }
    }
    parsedOptions[arg.name] = argValue
  })
  extraOptions.push(...parsedOptions['--'])
  parsedOptions.extraOptions = extraOptions
  parsedOptions.originalArgs = originalArgs
  parsedOptions.cmdDef = cmdDef
  debug('parsedOptions %O', parsedOptions)

  if (parsedOptions.help || !cmdDef.run) {
    await showHelp(cmdDef, parent, isEngine)
  } else {
    await cmdDef.run(parsedOptions)
  }
}
