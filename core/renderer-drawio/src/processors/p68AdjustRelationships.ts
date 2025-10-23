import type { DependsPair, DrawioContext, DrawioNodeTree } from '../types.ts'
import { absLeft, absTop, findCommonParent } from '../utils.ts'

const addRelationshipPoint = (
  relationship: DrawioNodeTree,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) => {
  const parentX = absLeft(relationship._parent)
  const parentY = absTop(relationship._parent)
  relationship._props._diagram.points = []
  relationship._props._diagram.points.push(
    {
      x: x1 - parentX,
      y: y1 - parentY,
    },
    {
      x: x2 - parentX,
      y: y2 - parentY,
    },
  )
  ;(relationship._props._diagram.dependency.style as any).edgeStyle =
    'orthogonalEdgeStyle'
}

const correctToDirectLine = (
  z1: number,
  z1Min: number,
  z1Max: number,
  z1Multiple: boolean,
  z2: number,
  z2Min: number,
  z2Max: number,
  z2Multiple: boolean,
): [number, number] => {
  if (z1 > z2Min && z1 < z2Max) {
    if (!z2Multiple) {
      return [z1, z1]
    }
  } else if (z2 > z1Min && z2 < z1Max) {
    if (!z1Multiple) {
      return [z2, z2]
    }
  }
  // no change
  return [z1, z2]
}

const handleHorizontal = (
  { list, relationships }: DependsPair,
  isRight: boolean,
  isSingleSource: boolean,
) => {
  const totalLength = list.length
  const isListMultiple = list.length > 1
  const middleNumber = totalLength / 2
  const listCenterY = list
    .map((l) => (l._props as any)._diagram.state.absCenterY)
    .reduce((a, b) => a + b, 0) / totalLength
  const listTop = Math.min(
    ...list.map((l) => (l._props as any)._diagram.state.absTop),
  )
  const listBottom = Math.max(
    ...list.map((l) => (l._props as any)._diagram.state.absBottom),
  )
  relationships.map((relationship, i) => {
    let x1: number
    let y1: number
    let y2: number
    let distanceX: number
    if (isSingleSource) {
      y1 = listCenterY +
        (i - middleNumber + 0.5) *
          (relationship._props as any)._diagram.dimension.arrowSpace
      y2 = (relationship._props as any)._target._props._diagram.state.absCenterY
      ;[y1, y2] = correctToDirectLine(
        y1,
        (relationship._props as any)._source._props._diagram.state.absTop,
        (relationship._props as any)._source._props._diagram.state.absBottom,
        false,
        y2,
        listTop,
        listBottom,
        isListMultiple,
      )
    } else {
      y1 = (relationship._props as any)._source._props._diagram.state.absCenterY
      y2 = listCenterY +
        (i - middleNumber + 0.5) *
          (relationship._props as any)._diagram.dimension.arrowSpace
      ;[y1, y2] = correctToDirectLine(
        y1,
        listTop,
        listBottom,
        isListMultiple,
        y2,
        (relationship._props as any)._target._props._diagram.state.absTop,
        (relationship._props as any)._target._props._diagram.state.absBottom,
        false,
      )
    }
    const sequencePadding =
      (relationship._props as any)._diagram.dimension.arrowSpace *
      (i < middleNumber ? i : totalLength - i - 1)
    if (isRight) {
      distanceX =
        (relationship._props as any)._target._props._diagram.state.absLeft -
        (relationship._props as any)._source._props._diagram.state.absRight
      x1 = (relationship._props as any)._source._props._diagram.state.absRight +
        distanceX / 2 +
        sequencePadding
    } else {
      distanceX =
        (relationship._props as any)._source._props._diagram.state.absLeft -
        (relationship._props as any)._target._props._diagram.state.absRight
      x1 = (relationship._props as any)._source._props._diagram.state.absLeft -
        distanceX / 2 -
        sequencePadding
    }
    if (relationship._props._diagram.flags.isFixedPosition) {
      const commonParent = findCommonParent(
        (relationship._props as any)._source,
        (relationship._props as any)._target,
      )

      if (relationship._props._y) {
        y1 = absTop(commonParent) +
          (relationship._props._y as number)
        y2 = y1
      }

      if (relationship._props._x) {
        x1 = absLeft(commonParent) +
          (relationship._props._x as number)
      }
    }

    addRelationshipPoint(relationship, x1, y1, x1, y2)
  })
}

const handleVertical = (
  { list, relationships }: DependsPair,
  isDown: boolean,
  isSingleSource: boolean,
) => {
  const totalLength = list.length
  const isListMultiple = list.length > 1
  const middleNumber = totalLength / 2
  const listLeft = Math.min(
    ...list.map((l) => (l._props as any)._diagram.state.absLeft),
  )
  const listRight = Math.max(
    ...list.map((l) => (l._props as any)._diagram.state.absRight),
  )
  relationships.map((relationship, i) => {
    let x1: number
    let x2: number
    let y1: number
    let distanceY: number
    if (isSingleSource) {
      x1 =
        (relationship._props as any)._source._props._diagram.state.absCenterX +
        (i - middleNumber + 0.5) *
          (relationship._props as any)._diagram.dimension.arrowSpace
      x2 = (relationship._props as any)._target._props._diagram.state.absCenterX
      ;[x1, x2] = correctToDirectLine(
        x1,
        (relationship._props as any)._source._props._diagram.state.absLeft,
        (relationship._props as any)._source._props._diagram.state.absRight,
        false,
        x2,
        listLeft,
        listRight,
        isListMultiple,
      )
    } else {
      x1 = (relationship._props as any)._source._props._diagram.state.absCenterX
      x2 =
        (relationship._props as any)._target._props._diagram.state.absCenterX +
        (i - middleNumber + 0.5) *
          (relationship._props as any)._diagram.dimension.arrowSpace
      ;[x1, x2] = correctToDirectLine(
        x1,
        listLeft,
        listRight,
        isListMultiple,
        x2,
        (relationship._props as any)._target._props._diagram.state.absLeft,
        (relationship._props as any)._target._props._diagram.state.absRight,
        false,
      )
    }
    const sequencePadding =
      (relationship._props as any)._diagram.dimension.arrowSpace *
      (i < middleNumber ? i : totalLength - i - 1)
    if (isDown) {
      distanceY =
        (relationship._props as any)._target._props._diagram.state.absTop -
        (relationship._props as any)._source._props._diagram.state.absBottom
      y1 =
        (relationship._props as any)._source._props._diagram.state.absBottom +
        distanceY / 2 +
        sequencePadding
    } else {
      distanceY =
        (relationship._props as any)._source._props._diagram.state.absTop -
        (relationship._props as any)._target._props._diagram.state.absBottom
      y1 = (relationship._props as any)._source._props._diagram.state.absTop -
        distanceY / 2 -
        sequencePadding
    }
    if (relationship._props._diagram.flags.isFixedPosition) {
      const commonParent = findCommonParent(
        (relationship._props as any)._source,
        (relationship._props as any)._target,
      )

      if (relationship._props._y) {
        y1 = absTop(commonParent) +
          (relationship._props._y as number)
      }

      if (relationship._props._x) {
        x1 = absLeft(commonParent) +
          (relationship._props._x as number)
        x2 = x1
      }
    }
    addRelationshipPoint(relationship, x1, y1, x2, y1)
  })
}

function alignRelationship(dependsPair: DependsPair) {
  const { arrowDirection } = dependsPair.relationships[0]._props._diagram.flags
  const dependencyStyle = dependsPair.relationships[0]._props._diagram
    .dependency
    .style as any
  if (
    dependencyStyle.edgeStyle?.includes('elbow') ||
    dependsPair.relationships[0]._props._diagram.points
  ) {
    return
  }

  const isSingleSource =
    dependsPair.single === (dependsPair.relationships[0]._props as any)._source
  switch (arrowDirection) {
    case 'left':
    case 'right':
      handleHorizontal(dependsPair, arrowDirection === 'right', isSingleSource)
      break
    default:
      handleVertical(dependsPair, arrowDirection === 'down', isSingleSource)
  }
}

export const p68AdjustRelationships = (context: DrawioContext) => {
  context.dependsPairs.map((dependsPair) => {
    alignRelationship(dependsPair)
  })
}
