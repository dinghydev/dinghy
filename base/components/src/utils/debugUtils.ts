import debug from 'debug'

export const createDebugger = (name: string) => {
  const win = globalThis.parent || globalThis
  const href = win?.location?.href
  if (href) {
    if (href.includes('debug=true')) {
      debug.enable(name)
    } else if (href.includes('debug=false')) {
      debug.disable()
    }
  }
  return debug(name)
}
