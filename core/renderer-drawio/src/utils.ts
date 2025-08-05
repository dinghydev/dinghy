import type { DrawioNodeTree } from './types.ts'

export const absLeft = (node: DrawioNodeTree): number => {
  if (node._parent) {
    return absLeft(node._parent) + node._props._diagram.geometry.x
  }
  return 0
}

export const absTop = (node: DrawioNodeTree): number => {
  if ((node._props._level as number) > 1) {
    return absTop(node._parent) + node._props._diagram.geometry.y
  }
  return 0
}

export const absBottom = (node: DrawioNodeTree) => {
  return absTop(node) + node._props._diagram.state.height
}

export const absRight = (node: DrawioNodeTree) => {
  return absLeft(node) + node._props._diagram.state.width
}

const collectParents = (
  { _parent }: DrawioNodeTree,
  result: DrawioNodeTree[] = [],
) => {
  if (_parent) {
    result.push(_parent)
    collectParents(_parent, result)
  }
  return result
}

export const findCommonParent = (
  node1: DrawioNodeTree,
  node2: DrawioNodeTree,
) => {
  const ancestor1 = collectParents(node1)
  const ancestor2 = collectParents(node2)
  const commonAncestor = ancestor1.filter((value) => ancestor2.includes(value))
  return commonAncestor[0]
}
