import type { ReactElement } from 'react'
import type { NodeTree } from '@reactiac/base-components'
import type { HostContainer } from '../types.js'

function findNodeByTitle(node: NodeTree, title: string) {
  if (node._props._title === title) {
    return node
  }
  let resolved: NodeTree | null = null
  node._children.map((c) => {
    if (resolved === null) {
      resolved = findNodeByTitle(c, title)
    }
  })
  return resolved
}

function findNodeByTag(node: NodeTree, tag: string) {
  if ((node._props._tags as string[]).includes(tag)) {
    return node
  }
  let resolved: NodeTree | null = null
  node._children.map((c) => {
    if (resolved === null) {
      resolved = findNodeByTag(c, tag)
    }
  })
  return resolved
}

function findNodeById(node: NodeTree, id: string): NodeTree {
  if (node._props._id === id) {
    return node
  }
  let resolved: unknown = null
  node._children.map((c) => {
    if (resolved === null) {
      resolved = findNodeById(c, id)
    }
  })
  return resolved as NodeTree
}

function resolveFromBase(base: NodeTree, spec: string) {
  let resolved =
    findNodeById(base, spec) ||
    findNodeByTitle(base, spec) ||
    findNodeByTag(base, spec)
  if (!resolved && base._parent) {
    resolved = resolveFromBase(base._parent, spec)
  }
  return resolved
}

function resolveNode(
  root: NodeTree,
  node: NodeTree,
  spec: ReactElement,
): NodeTree {
  const id = (
    typeof spec === 'undefined'
      ? node._parent!._props._id
      : typeof spec === 'object'
        ? ((spec as unknown as NodeTree)._props._id as string)
        : (spec as string)
  ) as string
  const resolved = resolveFromBase(node, id)
  if (!resolved) {
    throw new Error(`Dependency[${id}] not found`)
  }
  return resolved
}

function resolveDependency(rootNode: NodeTree, node: NodeTree) {
  const _source = resolveNode(rootNode, node, (node._props as any)._source)
  const _target = resolveNode(rootNode, node, (node._props as any)._target)

  _source._dependsOn ??= []
  _target._dependsBy ??= []
  _source._dependsOn.push(_target)
  _target._dependsBy.push(_source)
  ;(node._props as any)._source = _source
  ;(node._props as any)._target = _target
}

function resolveDependencies(rootNode: NodeTree, node: NodeTree) {
  if (node._props._isDependency) {
    resolveDependency(rootNode, node)
  } else {
    node._children.map((c) => {
      resolveDependencies(rootNode, c)
    })
  }
}

export const p30ResolveDependencies = (
  container: HostContainer<unknown, unknown>,
) => {
  const rootNode = (container.rootElement as any).props._node
  resolveDependencies(rootNode, rootNode)
}
