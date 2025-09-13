import {
  type CommandContext,
  OPTIONS_SYMBOL,
  REQUIRE_ENGINE_SYMBOL,
  RUN_SYMBOL,
  throwDinghyError,
} from '../types.ts'
import { showHelp } from './showHelp.ts'
import Debug from 'debug'
import { parseOptions } from './parseOptions.ts'
import { runEngineCommand } from './runEngineCommand.ts'
const debug = Debug('runCommand')

const executeCommand = async (context: CommandContext) => {
  const options = parseOptions(
    context.options,
    context.args,
    context.envPrefix,
  )
  // todo: use REQUIRE_CONTAINER_SYMBOL to fix iac-cicd $ DOCKER_IMAGEVERSION=latest dinghy tf init production --debug
  debug('running [dinghy %s]', context.prefix.join(' '))
  return await context.commands[RUN_SYMBOL]!(context, options)
}

export async function runCommand(context: CommandContext) {
  const cmdStr = context.args[0]
  if (
    context.commands[cmdStr] ||
    (!context.options?.arguments && cmdStr && cmdStr.charAt(0) !== '-')
  ) {
    let command = context.commands[cmdStr]
    let envName = cmdStr
    if (!command) {
      Object.entries(context.commands).find(([name, cmdDef]) => {
        const alias = cmdDef[OPTIONS_SYMBOL]?.cmdAlias ?? []
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
      if (!context.isEngine) {
        return await runEngineCommand(context)
      }
      const cmds = Object.keys(context.commands)
      Object.values(context.commands).map((cmd) => {
        for (const alias of cmd[OPTIONS_SYMBOL]?.cmdAlias ?? []) {
          cmds.push(alias)
        }
      })

      console.log(
        `Available commands:${
          context.prefix.length ? ` ${context.prefix.join(' ')}` : ''
        } [${cmds.join(', ')}]`,
      )
      throwDinghyError(`Command [${currentCommand.join(' ')}] not found`)
    }
    return await runCommand({
      ...context,
      prefix: [...context.prefix, cmdStr],
      envPrefix: [...context.prefix, envName],
      args: context.args.slice(1),
      commands: command,
      options: command[OPTIONS_SYMBOL],
    })
  }

  if (context.args.includes('--help') || context.args.includes('-h')) {
    if (context.commands[REQUIRE_ENGINE_SYMBOL] && !context.isEngine) {
      await runEngineCommand(context)
    } else {
      showHelp(context)
    }
    return
  }

  return await executeCommand(context)
}
