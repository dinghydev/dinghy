import { DinghyError, HANDLED_ERROR_EXIT_CODE } from '../types.ts'
import { updateCheck } from './updateCheck.ts'
import { loadGlobalConfig } from './loadConfig.ts'
import Debug from 'debug'
import { projectVersionRelease } from './projectVersions.ts'
import chalk from 'chalk'
import { hrtime } from 'node:process'
import { reportResult } from './reportResult.ts'
import { runCommands } from '../services/cli/runCommands.ts'
const NS_PER_SEC = 1e9

export const cliRun = async (
  commands: any,
  debug: Debug.Debugger,
  isEngine: boolean,
) => {
  const startTime = hrtime()
  let error: any = null
  try {
    debug('started at %O with version %s', new Date(), projectVersionRelease())

    await loadGlobalConfig()
    await updateCheck(true)

    await runCommands(Deno.args, commands, isEngine)

    debug('finished at %O', new Date())
  } catch (e) {
    error = e
  } finally {
    const diff = hrtime(startTime)
    const msTaken = Math.floor((diff[0] * NS_PER_SEC + diff[1]) / 1000000)
    await reportResult(msTaken, error)

    if (error) {
      if (error instanceof DinghyError) {
        debug('Deno.exit with %O', error)
        if (error.message) {
          console.error(
            `${error.code ? `${chalk.bold(error.code)} ` : ''}${
              chalk.red(error.message)
            }`,
          )
        }
        Deno.exit(HANDLED_ERROR_EXIT_CODE)
      } else {
        if (Deno.env.get('VSCODE_INSPECTOR_OPTIONS')) {
          // debugger mode is enabled, so we need to print the error to the console as it will be hidden by the debugger
          console.error(error)
        }
        // deno-lint-ignore no-unsafe-finally
        throw error
      }
    }
  }
}
