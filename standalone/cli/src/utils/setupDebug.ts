import Debug from 'debug'
const debug = Debug('setupDebug')

export function setupDebug() {
  const envDebug = Deno.env.get('DEBUG')
  if (envDebug) {
    Debug.enable(envDebug)
    debug('use env DEBUG=%s', envDebug)
    debug('Debug enabled: %s', envDebug)
  } else if (Deno.args.includes('--debug')) {
    Debug.enable('*')
    debug('Debug enabled: *')
  }
}
