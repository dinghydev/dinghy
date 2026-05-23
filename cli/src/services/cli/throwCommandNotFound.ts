import chalk from 'chalk'
import { DinghyError } from '../../shared/types.ts'
import { CMD_DEF_SYMBOL } from './types.ts'
import { loadCliCommands } from '../../commands/commands.ts'

export const throwCommandNotFound = async (
  potentialCommands: string[],
  i: number,
) => {
  const path = potentialCommands.slice(0, i + 1)
  const display = chalk.red(path.join(' '))

  const cliCommands = await loadCliCommands()
  let node: any = cliCommands
  for (const seg of path) {
    node = node?.[seg]
    if (!node) break
  }
  if (node?.[CMD_DEF_SYMBOL]) {
    throw new DinghyError(
      `Command [${display}] must be run from the Dinghy CLI on the host, not inside the engine container`,
    )
  }
  throw new DinghyError(`Command [${display}] not found`)
}
