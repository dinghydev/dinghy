import { type NodeTree, type Props } from '../types.ts'
import { useNodeContext } from './NodeContext.tsx'
import type { ZodObject, ZodRawShape } from 'zod'
import { capitalise, renderKey } from '../utils/stringUtils.ts'
import { getRootNode } from '../utils/nodeUtils.ts'

function proxyNodeProps({ _props }: NodeTree) {
  return new Proxy(_props, {
    get: (_target: Props, key: string) => {
      if (key in _props) {
        return (_props as any)[key]
      }
      const _outputSchema = (_props as any)
        ._outputSchema as ZodObject<ZodRawShape>
      if (_outputSchema && key in _outputSchema.shape) {
        return `\${${
          (_props as any)._category === 'data' ? 'data.' : ''
        }${(_props as any)._type}.${(_props as any)._id}.${renderKey(key)}}`
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
  id?: string,
  result: T[] = [],
) {
  if (
    (node._props._tags as string[]).includes(tag) &&
    (!id || (node._props._id as string).includes(id))
  ) {
    result.push(proxyNodeProps(node) as T)
  } else {
    node._children.map((child) => {
      matchChildrenTag<T>(child, tag, id, result)
    })
  }
  return result
}

export function lookupTypedSingleValueTag<T>(
  node: NodeTree,
  tag: string,
  id?: string,
) {
  const matched = matchChildrenTag<T>(node, tag, id)
  if (matched.length > 0) {
    return matched[0]
  }
  if (node._props._level) {
    return lookupTypedSingleValueTag<T>(node._parent!, tag, id)
  }
  throw new Error(`Tag ${tag} not found`)
}

function useTypedSingleValueTag<T>(base: NodeTree, tag: string, id?: string) {
  return new Proxy(base, {
    get: (_target: unknown, key: string) => {
      return () => {
        const _props = lookupTypedSingleValueTag<T>(base, tag, id) as Props
        return _props[key]
      }
    },
    set: (_target: unknown, key: string, _value: unknown) => {
      throw new Error(`Set readonly property ${key} not supported`)
    },
  })
}

function useTypedArrayValueTag<T>(base: NodeTree, tag: string, id?: string) {
  return new Proxy(base, {
    get: (_target: unknown, key: string) => {
      if (key === 'map') {
        return (f: any) => () => {
          const _propsArray = lookupTypedArrayValueTag<T>(
            base,
            tag,
            id,
          ) as NodeTree[]
          return _propsArray.map(f)
        }
      }
      throw new Error(`Unsupported array access: ${key}`)
    },
    set: (_target: unknown, key: string, _value: unknown) => {
      throw new Error(`Set readonly property ${key} not supported`)
    },
  })
}

export function lookupTypedArrayValueTag<T>(
  node: NodeTree,
  tag: string,
  id?: string,
) {
  const matched = matchChildrenTag<T>(node, tag, id)
  if (matched.length > 0) {
    return matched
  }
  if (node._parent) {
    return lookupTypedArrayValueTag<T>(node._parent, tag)
  }
  throw new Error(`Tag ${tag} not found`)
}

export function useTypedNode<T>(f: Function, id?: string) {
  const fName = f.name
  const fieldName = capitalise(fName)
  const base = useNodeContext()
  return {
    [fieldName]: useTypedSingleValueTag<T>(base, fName, id) as T,
  }
}

export function useTypedNodes<T>(f: Function, id?: string) {
  const node = useNodeContext()
  const fName = f.name
  const fieldName = capitalise(fName)
  return {
    [`${fieldName}s`]: useTypedArrayValueTag<T>(node, fName, id) as T,
    [`all${fieldName}s`]: useTypedArrayValueTag<T>(
      getRootNode(node),
      fName,
      id,
    ) as T,
  }
}
