import { runCommand } from './runCommand.ts'
import {
  type Commands,
  HANDLED_ERROR_EXIT_CODE,
  OPTIONS_SYMBOL,
  ReactiacError,
} from '../types.ts'
import { updateCheck } from './updateCheck.ts'
import { setupDebug } from './setupDebug.ts'
import { loadGlobalConfig } from './loadConfig.ts'
import Debug from 'debug'
import { projectVersionRelease } from './projectVersions.ts'
import chalk from 'chalk'
import { hrtime } from 'node:process'
import { reportResult } from './reportResult.ts'
const NS_PER_SEC = 1e9

export const cliRun = async (
  commands: Commands,
  debug: Debug.Debugger,
  isEngine: boolean,
) => {
  const startTime = hrtime()
  let error: any = null
  try {
    setupDebug()
    debug('started at %O with version %s', new Date(), projectVersionRelease())

    await loadGlobalConfig()
    await updateCheck(true)

    await runCommand({
      isEngine,
      prefix: [],
      envPrefix: [],
      args: Deno.args,
      originalArgs: Deno.args,
      commands,
      options: commands[OPTIONS_SYMBOL],
    })

    debug('finished at %O', new Date())
  } catch (e) {
    error = e
  } finally {
    const diff = hrtime(startTime)
    const msTaken = Math.floor((diff[0] * NS_PER_SEC + diff[1]) / 1000000)
    await reportResult(msTaken, error)

    if (error) {
      if (error instanceof ReactiacError) {
        console.error(
          `${error.code ? `${chalk.bold(error.code)} ` : ''}${
            chalk.red(error.message)
          }`,
        )
        Deno.exit(HANDLED_ERROR_EXIT_CODE)
      } else {
        // deno-lint-ignore no-unsafe-finally
        throw error
      }
    }
  }
}
