import { basename, resolve } from '@std/path'
import { parseArgs } from '@std/cli'

const resolveHome = () => {
  const appHome = Deno.env.get('APP_HOME') || parseArgs(Deno.args)['app-home']
  if (appHome) {
    return resolve(appHome)
  } else {
    return Deno.cwd()
  }
}

export const isInsideContainer = Deno.env.get('HOST_USER_HOME') !== undefined
export const hostAppHome = Deno.env.get('HOST_APP_HOME') || resolveHome()
export const appHomeMount = `/dinghy/engine/workspace/${basename(hostAppHome)}`
export const containerAppHome = isInsideContainer ? appHomeMount : resolveHome()
export const dinghyHome = Deno.env.get('DINGHY_HOME') ||
  `${Deno.env.get('HOME')}/.dinghy`
