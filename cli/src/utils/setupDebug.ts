import Debug from 'debug'
const debug = Debug('setupDebug')

export function setupDebug() {
  const envDebug = Deno.env.get('DEBUG')
  if (envDebug) {
    debug('use env DEBUG=%s', envDebug)
    if (envDebug === 'false') {
      Debug.disable()
      debug('Debug disabled')
    } else {
      Debug.enable(envDebug)
      debug('Debug enabled: %s', envDebug)
    }
  } else if (Deno.args.includes('--debug')) {
    Debug.enable('*')
    debug('Debug enabled: *')
  } else if (Deno.env.get('RUNNER_DEBUG')) {
    Debug.enable('*')
    debug('Debug enabled by RUNNER_DEBUG environment variable')
  }
}
