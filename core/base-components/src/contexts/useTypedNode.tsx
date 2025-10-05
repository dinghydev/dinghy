import { type NodeTree, type Props } from '../types/index.ts'
import { useNodeContext } from './NodeContext.tsx'
import type { ZodObject, ZodRawShape } from 'zod'
import { renderKey } from '../utils/stringUtils.ts'
import { getRootNode } from '../utils/nodeUtils.ts'
import { capitalise, decapitalise } from '../utils/stringUtils.ts'

function proxyNodeProps({ _props }: NodeTree) {
  return new Proxy(_props, {
    get: (_target: Props, key: string) => {
      if (key in _props) {
        return (_props as any)[key]
      }
      const _outputSchema = (_props as any)
        ._outputSchema as ZodObject<ZodRawShape>
      const noneArrayKey = key.includes('[') ? key.split('[')[0] : key
      if (_outputSchema && noneArrayKey in _outputSchema.shape) {
        return `\${${(_props as any)._category === 'data' ? 'data.' : ''}${
          (_props as any)._type
        }.${(_props as any)._id}.${renderKey(key)}}`
      }
      if (`_${key}` in _props) {
        return (_props as any)[`_${key}`]
      }
      throw new Error(`Property ${key} not found in ${_props._id}`)
    },
  })
}

function matchChildrenTag<T>(
  node: NodeTree,
  tag: string,
  childrenOnly: boolean,
  id?: string,
  result: T[] = [],
) {
  if (
    node._props._tags &&
    (node._props._tags as string[]).includes(tag) &&
    (!id || (node._props._id as string).includes(id))
  ) {
    result.push(proxyNodeProps(node) as T)
  } else {
    node._children.map((child) => {
      matchChildrenTag<T>(child, tag, childrenOnly, id, result)
    })
  }
  return result
}

export function lookupTypedSingleValueTag<T>(
  node: NodeTree,
  tag: string,
  childrenOnly: boolean,
  id?: string,
) {
  const matched = matchChildrenTag<T>(node, tag, childrenOnly, id)
  if (childrenOnly || matched.length > 0) {
    return matched[0]
  }
  if (node._props._level) {
    return lookupTypedSingleValueTag<T>(node._parent!, tag, childrenOnly, id)
  }
  throw new Error(`Tag ${tag} not found`)
}

function useTypedSingleValueTag<T>(
  base: NodeTree,
  tag: string,
  childrenOnly: boolean,
  id?: string,
) {
  if (childrenOnly) {
    return lookupTypedSingleValueTag<T>(base, tag, childrenOnly, id) as Props
  }
  return new Proxy(base, {
    get: (_target: unknown, key: string) => {
      return () => {
        const _props = lookupTypedSingleValueTag<T>(
          base,
          tag,
          childrenOnly,
          id,
        ) as Props
        return _props[key]
      }
    },
    set: (_target: unknown, key: string, _value: unknown) => {
      throw new Error(`Set readonly property ${key} not supported`)
    },
  })
}

function useTypedArrayValueTag<T>(
  base: NodeTree,
  tag: string,
  childrenOnly: boolean,
  id?: string,
) {
  return new Proxy(base, {
    get: (_target: unknown, key: string) => {
      if (key === 'map') {
        if (childrenOnly) {
          return (f: any) => {
            const _propsArray = lookupTypedArrayValueTag<T>(
              base,
              tag,
              childrenOnly,
              id,
            ) as NodeTree[]
            return _propsArray.map(f)
          }
        } else {
          return (f: any) => () => {
            const _propsArray = lookupTypedArrayValueTag<T>(
              base,
              tag,
              childrenOnly,
              id,
            ) as NodeTree[]
            return _propsArray.map(f)
          }
        }
      }
      throw new Error(`Unsupported array access: ${key}`)
    },
    set: (_target: unknown, key: string, _value: unknown) => {
      throw new Error(`Set readonly property ${key} not supported`)
    },
  })
}

function resolveFieldName(fName: string) {
  const words = fName.match(/[A-Z][a-z0-9_]*/g)
  const name = (words && words.length >= 2)
    ? words.slice(-2).map((s) => capitalise(s)).join('')
    : fName
  return decapitalise(name)
}

export function lookupTypedArrayValueTag<T>(
  node: NodeTree,
  tag: string,
  childrenOnly: boolean,
  id?: string,
) {
  const matched = matchChildrenTag<T>(node, tag, childrenOnly, id)
  if (childrenOnly || matched.length > 0) {
    return matched
  }
  if (node._parent) {
    return lookupTypedArrayValueTag<T>(node._parent, tag, childrenOnly, id)
  }
  throw new Error(`Tag ${tag} not found`)
}

export function useParentsProp(name: string, node?: NodeTree): any {
  if (!node) {
    node = useNodeContext()
  }
  const value = (node._props as any)[name]
  if (value !== undefined) {
    return value
  }

  const parent = node._parent
  if (!parent) {
    throw new Error(`Attribute ${name} not found in any parents`)
  }
  return useParentsProp(name, parent)
}

export function useTypedNode<T>(
  f: any,
  baseNnode?: NodeTree,
  id?: string,
) {
  const fName = f.name
  const fieldName = resolveFieldName(fName)
  const base = baseNnode || useNodeContext()
  const childrenOnly = Boolean(baseNnode)
  return {
    [fieldName]: useTypedSingleValueTag<T>(base, fName, childrenOnly, id) as T,
  }
}

export function useTypedNodes<T>(
  f: any,
  baseNnode?: NodeTree,
  id?: string,
) {
  const node = baseNnode || useNodeContext()
  const childrenOnly = Boolean(baseNnode)
  const fName = f.name
  const fieldName = resolveFieldName(fName)
  return {
    [`${fieldName}s`]: useTypedArrayValueTag<T>(
      node,
      fName,
      childrenOnly,
      id,
    ) as T[],
    [`all${capitalise(fieldName)}s`]: useTypedArrayValueTag<T>(
      getRootNode(node),
      fName,
      childrenOnly,
      id,
    ) as T[],
  }
}
