import { type NodeTree } from '../types/index.ts'
import type { Props } from '../cli-shared/index.ts'
import { useNodeContext } from './NodeContext.tsx'
import { renderKey } from '../cli-shared/stringUtils.ts'
import { getRootNode } from './getRenderOptions.tsx'
import { capitalise, decapitalise } from '../cli-shared/stringUtils.ts'

function proxyNodeProps({ _props }: NodeTree) {
  return new Proxy(_props, {
    get: (_target: Props, key: string) => {
      if (key in _props || key === '_consolidatedId') {
        return (_props as any)[key]
      }
      const terraformId = () => {
        let category = (_props as any)._category
        if (Array.isArray(category)) {
          category = category[0]
        }
        return `${category === 'resource' ? '' : `${category}.`}${
          (_props as any)._type
        }.${_props._consolidatedId || _props._id}`
      }
      if (key === '_terraformId') {
        return terraformId()
      }
      for (
        const schema of [
          (_props as any)._outputSchema,
          (_props as any)._inputSchema,
        ]
      ) {
        if (schema && key in (schema as any).shape) {
          return `\${${terraformId()}.${renderKey(key)}}`
        }
      }
      throw new Error(`Property ${key} not found in ${_props._id}`)
    },
  })
}

function matchChildrenTag<T>(
  node: NodeTree,
  tag: string,
  childrenOnly: boolean,
  result: T[],
  idFilter?: string,
) {
  if (
    node._props._tags &&
    (node._props._tags as string[]).includes(tag) &&
    (idFilter === undefined || (node._props._id as string).includes(idFilter))
  ) {
    result.push(proxyNodeProps(node) as T)
  } else {
    node._children.map((child) => {
      matchChildrenTag<T>(child, tag, childrenOnly, result, idFilter)
    })
  }
  return result
}

export function lookupTypedSingleValueTag<T>(
  node: NodeTree,
  tag: string,
  childrenOnly: boolean,
  idFilter?: string,
  optional?: boolean,
) {
  const matched = matchChildrenTag<T>(node, tag, childrenOnly, [], idFilter)
  if (childrenOnly || matched.length > 0) {
    return matched[0]
  }
  if (node._props._level) {
    return lookupTypedSingleValueTag<T>(
      node._parent!,
      tag,
      childrenOnly,
      idFilter,
      optional,
    )
  }
  if (!optional) {
    throw new Error(`Tag ${tag} not found`)
  }
}

function useTypedSingleValueTag<T>(
  base: NodeTree,
  tag: string,
  childrenOnly: boolean,
  idFilter?: string,
  optional?: boolean,
) {
  if (childrenOnly) {
    return lookupTypedSingleValueTag<T>(
      base,
      tag,
      childrenOnly,
      idFilter,
      optional,
    ) as Props
  }
  return new Proxy(base, {
    get: (_target: unknown, key: string) => {
      return () => {
        const _props = lookupTypedSingleValueTag<T>(
          base,
          tag,
          childrenOnly,
          idFilter,
          optional,
        ) as Props
        if (_props) {
          return _props[key]
        }
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
  idFilter?: string,
  optional?: boolean,
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
              idFilter,
              optional,
            ) as NodeTree[]
            return _propsArray.map(f)
          }
        } else {
          return (f: any) => () => {
            const _propsArray = lookupTypedArrayValueTag<T>(
              base,
              tag,
              childrenOnly,
              idFilter,
              optional,
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
  optional?: boolean,
) {
  const matched = matchChildrenTag<T>(node, tag, childrenOnly, [], id)
  if (childrenOnly || matched.length > 0) {
    return matched
  }
  if (node._parent) {
    return lookupTypedArrayValueTag<T>(
      node._parent,
      tag,
      childrenOnly,
      id,
      optional,
    )
  }
  if (!optional) {
    throw new Error(`Tag ${tag} not found`)
  }
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
  idFilter?: string,
  baseNode?: NodeTree,
  optional?: boolean,
) {
  const fName = f.name
  const fieldName = resolveFieldName(fName)
  const base = baseNode || useNodeContext()
  const childrenOnly = Boolean(baseNode)
  return {
    [fieldName]: useTypedSingleValueTag<T>(
      base,
      fName,
      childrenOnly,
      idFilter,
      optional,
    ) as T,
  }
}

export function useTypedNodes<T>(
  f: any,
  idFilter?: string,
  baseNode?: NodeTree,
  optional?: boolean,
) {
  const node = baseNode || useNodeContext()
  const childrenOnly = Boolean(baseNode)
  const fName = f.name
  const fieldName = resolveFieldName(fName)
  return {
    [`${fieldName}s`]: useTypedArrayValueTag<T>(
      node,
      fName,
      childrenOnly,
      idFilter,
      optional,
    ) as T[],
    [`all${capitalise(fieldName)}s`]: useTypedArrayValueTag<T>(
      getRootNode(node),
      fName,
      childrenOnly,
      idFilter,
      optional,
    ) as T[],
  }
}
