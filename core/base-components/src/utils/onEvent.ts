import Debug from 'debug'
import { existsSync } from '@std/fs/exists'
import { containerAppHome } from '../cli-shared/home.ts'
const debug = Debug('dinghy:event')

export const onEvent = async (name: string, ...args: any[]) => {
  debug(`on ${name}`)
  const eventFileName = `${containerAppHome}/events/on.${name}.ts`
  if (existsSync(eventFileName)) {
    const eventModule = await import(eventFileName)
    if (!eventModule.default) {
      throw new Error(
        `Event module ${eventFileName} does not have a default export function`,
      )
    }
    debug(`trigger ${name} ...`)
    await eventModule.default(...args)
  }
}
