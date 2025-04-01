import { parseArgs } from '@std/cli'
import {
  type CommandContext,
  OPTIONS_SYMBOL,
  OPTIONS_TYPES,
  RUN_SYMBOL,
} from '../../../runner/src/types.ts'
import { showHelp } from './showHelp.ts'
import Debug from 'debug'
import { configGet } from './loadConfig.ts'
import commands from '../commands/index.ts'
const debug = Debug('runCommand')

const loadDefaultFromEnv = async (context: CommandContext) => {
  const defaultWithEnv = { ...(context.options.default || {}) }

  for (const optionType of OPTIONS_TYPES) {
    for (const option of context.options[optionType] || []) {
      let value: any = configGet([...context.envPrefix, option])
      if (value) {
        if (optionType === 'boolean') {
          value = Boolean(value)
        } else if (optionType === 'number') {
          value = value.includes('.')
            ? Number.parseFloat(value)
            : Number.parseInt(value)
        } else if (optionType === 'collect') {
          value = value.split(',')
        }
        defaultWithEnv[option] = value
      }
    }
  }
  return defaultWithEnv
}

const executeCommand = async (context: CommandContext) => {
  const optionsSpec = context.options
  const options: any = parseArgs(context.args, {
    ...optionsSpec,
    default: await loadDefaultFromEnv(context),
  })
  if (optionsSpec.arguments) {
    Object.entries(optionsSpec.arguments).map(([name, spec], index) => {
      const value = options._[index] || configGet([...context.envPrefix, name])
      if (spec.required && value === undefined) {
        console.error(`Argument [${name.toLocaleUpperCase()}] is required`)
        Deno.exit(1)
      }
      options[name] = value
    })
  }

  debug('options %O', options)
  console.log('commands', commands)
  return await context.commands[RUN_SYMBOL](context, options)
}

export async function runCommand(context: CommandContext) {
  const cmdStr = context.args[0]
  if (!context.options.arguments && cmdStr && cmdStr.charAt(0) !== '-') {
    let command = context.commands[cmdStr]
    let envName = cmdStr
    if (!command) {
      Object.entries(context.commands).find(([name, cmdDef]) => {
        const alias = cmdDef[OPTIONS_SYMBOL].cmdAlias ?? []
        if (alias.includes(cmdStr)) {
          command = cmdDef
          envName = name
          return true
        }
        return false
      })
    }
    const currentCommand = [...context.prefix, cmdStr]
    if (!command) {
      console.error(`Command [${currentCommand.join(' ')}] not found`)
      const cmds = Object.keys(context.commands)
      Object.values(context.commands).map((cmd) => {
        for (const alias of cmd[OPTIONS_SYMBOL].cmdAlias ?? []) {
          cmds.push(alias)
        }
      })

      console.log(
        `Available commands:${context.prefix.length ? ` ${context.prefix.join(' ')}` : ''} [${cmds.join(', ')}]`,
      )
      Deno.exit(1)
    }
    return await runCommand({
      prefix: [...context.prefix, cmdStr],
      envPrefix: [...context.prefix, envName],
      args: context.args.slice(1),
      commands: command,
      options: command[OPTIONS_SYMBOL],
    })
  }

  if (context.args.includes('--help') || context.args.includes('-h')) {
    showHelp(context)
    return
  }

  return await executeCommand(context)
}
