import type { DependsPair, DrawioContext, DrawioNodeTree } from '../types.ts'

function moveRightChildrenAbs(node: DrawioNodeTree, distance: number) {
  node._children.map((child: DrawioNodeTree) => {
    ;(child._props as any)._diagram.state.absCenterX += distance
    ;(child._props as any)._diagram.state.absLeft += distance
    ;(child._props as any)._diagram.state.absRight += distance
    moveRightChildrenAbs(child, distance)
  })
}

function moveDownChildrenAbs(node: DrawioNodeTree, distance: number) {
  node._children.map((child: DrawioNodeTree) => {
    ;(child._props as any)._diagram.state.absCenterY += distance
    ;(child._props as any)._diagram.state.absTop += distance
    ;(child._props as any)._diagram.state.absBottom += distance
    moveDownChildrenAbs(child, distance)
  })
}

function moveRightNodeX(node: DrawioNodeTree, distance: number) {
  if (node._parent._props._diagram.flags.isDirectionVertical) {
    ;(node._props as any)._diagram.geometry.x += distance
    ;(node._props as any)._diagram.state.absCenterX += distance
    ;(node._props as any)._diagram.state.absLeft += distance
    ;(node._props as any)._diagram.state.absRight += distance
    ;(node._props as any)._diagram.state.moveableRight -= distance
    moveRightChildrenAbs(node, distance)
  } else {
    let started = false
    node._parent._children.map((child: DrawioNodeTree) => {
      if (child === node) {
        started = true
      }
      if (started) {
        ;(child._props as any)._diagram.geometry.x += distance
        ;(child._props as any)._diagram.state.absCenterX += distance
        ;(child._props as any)._diagram.state.absLeft += distance
        ;(child._props as any)._diagram.state.absRight += distance
        ;(child._props as any)._diagram.state.moveableRight -= distance
        moveRightChildrenAbs(child, distance)
      }
    })
  }
}

function moveDownNodeY(node: DrawioNodeTree, distance: number) {
  if (node._parent._props._diagram.flags.isDirectionVertical) {
    let started = false
    node._parent._children.map((child: DrawioNodeTree) => {
      if (child === node) {
        started = true
      }
      if (started) {
        ;(child._props as any)._diagram.geometry.y += distance
        ;(child._props as any)._diagram.state.absCenterY += distance
        ;(child._props as any)._diagram.state.absTop += distance
        ;(child._props as any)._diagram.state.absBottom += distance
        ;(child._props as any)._diagram.state.moveableBottom -= distance
        moveDownChildrenAbs(child, distance)
      }
    })
  } else {
    ;(node._props as any)._diagram.geometry.y += distance
    ;(node._props as any)._diagram.state.absCenterY += distance
    ;(node._props as any)._diagram.state.absTop += distance
    ;(node._props as any)._diagram.state.absBottom += distance
    ;(node._props as any)._diagram.state.moveableBottom -= distance
    moveDownChildrenAbs(node, distance)
  }
}

const moveRight = ({ single, list }: DependsPair) => {
  const listCenterX = list
    .map((dep) => (dep._props as any)._diagram.state.absCenterX)
    .reduce((a, b) => a + b, 0) / list.length
  const diff = (single._props as any)._diagram.state.absCenterX - listCenterX
  if (diff > 0) {
    // move list right
    const distance = Math.min(list[0]._props._diagram.state.moveableRight, diff)
    if (distance > 0) {
      moveRightNodeX(list[0], distance)
      return true
    }
  } else if (diff < 0) {
    // move single node right
    const distance = Math.min(
      single._props._diagram.state.moveableRight,
      0 - diff,
    )
    if (distance > 0) {
      moveRightNodeX(single, distance)
      return true
    }
  }
}

const moveDown = ({ single, list }: DependsPair) => {
  const listCenterY = list
    .map((dep) => (dep._props as any)._diagram.state.absCenterY)
    .reduce((a, b) => a + b, 0) / list.length
  const diff = (single._props as any)._diagram.state.absCenterY - listCenterY
  if (diff > 0) {
    // move list down
    const distance = Math.min(
      list[0]._props._diagram.state.moveableBottom,
      diff,
    )
    if (distance > 0) {
      moveDownNodeY(list[0], distance)
      return true
    }
  } else if (diff < 0) {
    // move single node down
    const distance = Math.min(
      single._props._diagram.state.moveableBottom,
      0 - diff,
    )
    if (distance > 0) {
      moveDownNodeY(single, distance)
      return true
    }
  }
}

const alignDependency = (dependsPair: DependsPair) => {
  if (
    dependsPair.all.some((node) => node._props._diagram.flags.isFixedPosition)
  ) {
    return false
  }
  const { isArrowVertical } = dependsPair.relationships[0]._props._diagram.flags
  if (isArrowVertical) {
    return moveRight(dependsPair)
  }
  return moveDown(dependsPair)
}

function alignDependencies(context: DrawioContext) {
  let moved = true
  while (moved) {
    moved = false
    context.dependsPairs.map((dependsPair) => {
      if (alignDependency(dependsPair)) {
        moved = true
      }
    })
  }
}

export const p65AlignDependencies = (context: DrawioContext) => {
  alignDependencies(context)
}
