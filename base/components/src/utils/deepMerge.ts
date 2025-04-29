export const deepMerge = (
  target: any,
  ...sources: any[]
): any => {
  if (!sources.length) return target
  const source = sources.shift()

  if (source === undefined) return target

  if (Array.isArray(target)) {
    if (Array.isArray(source)) {
      return [...source, ...target]
    }
    throw new Error('Cannot merge non-array target with array source')
  }

  if (typeof target === 'object' && typeof source === 'object') {
    for (const key in source) {
      if (typeof source[key] === 'object') {
        if (!target[key]) {
          Object.assign(target, { [key]: {} })
        }
        deepMerge(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return deepMerge(target, ...sources)
}
