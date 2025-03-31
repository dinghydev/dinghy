import { parseArgs } from '@std/cli'
import {
  type CommandContext,
  OPTIONS_SYMBOL,
  OPTIONS_TYPES,
  RUN_SYMBOL,
} from './types.ts'
import { showHelp } from './utils/showHelp.ts'
import Debug from 'debug'
const debug = Debug('runCommand')

const loadDefaultFromEnv = async (context: CommandContext) => {
  const defaultWithEnv = { ...(context.options.default || {}) }

  for (const optionType of OPTIONS_TYPES) {
    for (const option of context.options[optionType] || []) {
      const envVar = [...context.envPrefix, option].join('_').toUpperCase()
      let envValue: any = Deno.env.get(envVar)
      if (envValue) {
        if (optionType === 'boolean') {
          envValue = Boolean(envValue)
        } else if (optionType === 'number') {
          envValue = envValue.includes('.')
            ? Number.parseFloat(envValue)
            : Number.parseInt(envValue)
        } else if (optionType === 'collect') {
          envValue = envValue.split(',')
        }
        defaultWithEnv[option] = envValue
        debug('use env %s=*', envVar)
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
  debug('options %O', options)
  return await context.commands[RUN_SYMBOL](context, options)
}

export async function runCommand(context: CommandContext) {
  const cmdStr = context.args[0]
  if (cmdStr && cmdStr.charAt(0) !== '-') {
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
