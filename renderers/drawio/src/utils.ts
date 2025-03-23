import type { DrawioNodeTree } from './types.js'

export const absLeft = (node: DrawioNodeTree): number => {
  if (node._parent) {
    return absLeft(node._parent) + (node._props._diagram.geometry.x as number)
  }
  return 0
}

export const absTop = (node: DrawioNodeTree): number => {
  if (node._props._level as number > 1) {
    return absTop(node._parent) + (node._props._diagram.geometry.y as number)
  }
  return 0
}

export const absBottom = (node: DrawioNodeTree) => {
  return absTop(node) + node._props._diagram.state.height
}

export const absRight = (node: DrawioNodeTree) => {
  return absLeft(node) + node._props._diagram.state.width
}
