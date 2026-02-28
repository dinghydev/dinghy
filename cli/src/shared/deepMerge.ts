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
      for (const item of cloneSource) {
        if (item && typeof item === 'object') {
          const itemId = item.id ?? item._id
          if (itemId) {
            const existing = target.find((t: any) =>
              (t?.id ?? t?._id) === itemId
            )
            if (existing) {
              deepMerge(existing, item)
              continue
            }
          }
        }
        target.push(item)
      }
      return target
    } else {
      console.error('target', target)
      console.error('source', source)
      throw new Error('Cannot merge non-array target with array source')
    }
  }

  if (typeof source === 'object') {
    if (Object.keys(source).includes('$$typeof')) {
      return source
    }
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
