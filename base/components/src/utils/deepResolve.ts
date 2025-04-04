import type { ReactElement } from 'react'
import type { NodeTree, Props } from '../types.ts'

export const deepResolve = (
  node: NodeTree,
  props: Props,
  key?: string,
): any => {
  let value = key ? props[key] : props
  if (typeof value === 'function') {
    value = value(node)
    value = deepResolve(node, value as Props)
    if (key) {
      props[key] = value
    }
    return value
  }
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      value[i] = deepResolve(node, value[i])
    }
    return value
  }
  if (typeof value === 'object') {
    const object = value as Props
    for (const key of Object.keys(object)) {
      deepResolve(node, object, key)
    }
    return object
  }
  return value
}
