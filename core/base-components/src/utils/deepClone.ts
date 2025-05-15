export const deepClone = <T, U = T extends Array<infer V> ? V : never>(
  source: T,
): T => {
  if (Array.isArray(source)) {
    return source.map((item) => (deepClone(item))) as T & U[]
  }
  if (source instanceof Date) {
    return new Date(source.getTime()) as T & Date
  }
  if (source && typeof source === 'object') {
    return (Object.getOwnPropertyNames(source) as (keyof T)[]).reduce<T>(
      (o, prop) => {
        Object.defineProperty(
          o,
          prop,
          Object.getOwnPropertyDescriptor(source, prop)!,
        )
        o[prop] = deepClone(source[prop])
        return o
      },
      Object.create(Object.getPrototypeOf(source)),
    )
  }
  return source
}
