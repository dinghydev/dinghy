import { expandEnvPlaceholders } from '@dinghy/cli'
import ejs from 'ejs'

const resolveString = (value: string, ctx: any): string => {
  if (value.includes('${')) value = expandEnvPlaceholders(value)
  if (value.includes('<%')) {
    try {
      value = ejs.render(value, ctx)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      throw new Error(`Resolve value failed: ${msg}\nInput: ${value}`)
    }
  }
  return value
}

export const resolveStringValues = (obj: any, ctx: any): void => {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'string') obj[i] = resolveString(obj[i], ctx)
      else resolveStringValues(obj[i], ctx)
    }
  } else if (obj !== null && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === 'string') obj[key] = resolveString(obj[key], ctx)
      else resolveStringValues(obj[key], ctx)
    }
  }
}
