export const deepResolve = (
  props: any,
  key?: string,
): any => {
  let value = key ? props[key] : props
  if (typeof value === 'function') {
    value = value(undefined)
    value = deepResolve(value)
    if (key) {
      props[key] = value
    }
    return value
  }
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      value[i] = deepResolve(value[i])
    }
    return value
  }
  if (typeof value === 'object' && value !== null) {
    const object = value
    for (const key of Object.keys(object)) {
      deepResolve(object, key)
    }
    return object
  }
  return value
}
