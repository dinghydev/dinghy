export const deepMerge = (
  target: any,
  source: any,
): any => {
  if (source === undefined || source === null) {
    return target
  }

  if (Array.isArray(source)) {
    const cloneSource = source.map((item) => {
      if (Array.isArray(item)) {
        return deepMerge([], item)
      }
      if (typeof item === 'object') {
        return deepMerge({}, item)
      }
      return item
    })
    if (target === undefined || target === null) {
      return cloneSource
    } else if (Array.isArray(target)) {
      target.push(...cloneSource)
      return target
    } else {
      console.error('target', target)
      console.error('source', source)
      throw new Error('Cannot merge non-array target with array source')
    }
  }

  if (typeof source === 'object') {
    if (Array.isArray(target)) {
      console.error('target', target)
      console.error('source', source)
      throw new Error('Cannot merge array target with object source')
    }
    if (typeof target !== 'object') {
      target = {}
    }
    Object.entries(source).map(([key, value]) => {
      target[key] = deepMerge(target[key], value)
    })
    return target
  }

  return source
}
