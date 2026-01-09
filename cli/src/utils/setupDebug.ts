import Debug from 'debug'
const debug = Debug('setupDebug')

export function setupDebug() {
  let debugConfig = Deno.env.get('DEBUG')
  if (debugConfig) {
    debug('use env DEBUG=%s', debugConfig)
  } else if (Deno.args.includes('--debug')) {
    debugConfig = '*'
    debug('Debug enabled with --debug flag')
  } else if (Deno.env.get('RUNNER_DEBUG')) {
    debugConfig = '*'
    debug('Debug enabled by RUNNER_DEBUG environment variable')
  }

  if (debugConfig !== undefined) {
    if (debugConfig === 'false') {
      Debug.disable()
      debug('Debug disabled')
    } else {
      Debug.log = console.info.bind(console)
      Debug.enable(debugConfig)
      debug('Debug enabled: %s', debugConfig)
    }
  }
}
