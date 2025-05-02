import type { DimensionType, DrawioContext, DrawioNodeTree } from '../types.ts'

const applySameDimension = (
  node: DrawioNodeTree,
  dimension: DimensionType,
  maxDimension: number,
) => {
  node._children.map((child) => {
    const diff = maxDimension - child._props._diagram.state[dimension]
    if (diff > 0) {
      if (child._props._diagram.flags.isEntity) {
        if (dimension === 'width') {
          child._props._diagram.state.moveableRight += diff
        } else {
          child._props._diagram.state.moveableBottom += diff
        }
      } else {
        if (
          (dimension === 'width' &&
            !child._props._diagram.flags.isFixedWidth) ||
          (dimension === 'height' && !child._props._diagram.flags.isFixedHeight)
        ) {
          expandDimension(child, dimension, diff)
        }
      }
    }
  })
}

const groupChildren = (node: DrawioNodeTree) =>
  node._children.filter(
    (child: DrawioNodeTree) => !child._props._diagram.flags.isEntity,
  )

const expandDimension = (
  node: DrawioNodeTree,
  dimension: DimensionType,
  diff: number,
) => {
  ;(node._props as any)._diagram.geometry[dimension] += diff
  node._props._diagram.state[dimension] += diff
  if (!node._props._diagram.flags.isEntity) {
    let expanded = 0
    const fullColumn =
      (node._props._direction === 'vertical' && dimension === 'width') ||
      (node._props._direction !== 'vertical' && dimension === 'height')
    const gChildren = groupChildren(node)
    const evenDiff = fullColumn
      ? diff
      : (gChildren.length > 0 ? diff / gChildren.length : 0)
    node._children.map((child: DrawioNodeTree) => {
      if (
        child._props._diagram.flags.isEntity
      ) {
        if (gChildren.length === 0) {
          if (dimension === 'width') {
            child._props._diagram.state.moveableRight += diff
          } else {
            child._props._diagram.state.moveableBottom += diff
          }
        }
      } else {
        if (dimension === 'width') {
          if (!child._props._diagram.flags.isFixedWidth) {
            expandDimension(child, dimension, evenDiff)
            ;(child._props as any)._diagram.geometry.x += expanded
            if (!fullColumn) {
              expanded += evenDiff
            }
          }
        } else {
          if (!child._props._diagram.flags.isFixedHeight) {
            expandDimension(child, dimension, evenDiff)
            ;(child._props as any)._diagram.geometry.y += expanded
            if (!fullColumn) {
              expanded += evenDiff
            }
          }
        }
      }
    })
  }
}

const resolveDimensions = (node: DrawioNodeTree, x: number, y: number) => {
  ;(node._props as any)._diagram.state = {
    moveableRight: 0,
    moveableBottom: 0,
  }

  let width = 0
  let height = 0

  let childX = (node._props as any)._diagram.dimension.spaceX
  let childY = (node._props as any)._diagram.dimension.spaceY
  for (const child of node._children) {
    resolveDimensions(child, childX, childY)

    if (node._props._diagram.flags.isDirectionVertical) {
      childY = childY +
        child._props._diagram.state.height +
        node._props._diagram.dimension.spaceBetweenY
      height = height +
        child._props._diagram.state.height +
        (height > 0
          ? node._props._diagram.dimension.spaceBetweenY
          : node._props._diagram.dimension.spaceY)
      width = Math.max(
        width,
        child._props._diagram.state.width +
          node._props._diagram.dimension.spaceX,
      )
    } else {
      childX = childX +
        child._props._diagram.state.width +
        node._props._diagram.dimension.spaceBetweenX
      width = width +
        child._props._diagram.state.width +
        (width > 0
          ? node._props._diagram.dimension.spaceBetweenX
          : node._props._diagram.dimension.spaceX)
      height = Math.max(
        height,
        child._props._diagram.state.height +
          node._props._diagram.dimension.spaceX,
      )
    }
  }
  if (node._children.length > 0) {
    const dimension = node._props._diagram.flags.isDirectionVertical
      ? 'width'
      : 'height'
    const maxDimension = Math.max(
      ...node._children.map(
        (child: any) => child._props._diagram.state[dimension],
      ),
    )
    applySameDimension(node, dimension, maxDimension)
  }

  if (width === 0) {
    width = node._props._diagram.dimension.boxWidth
    height = node._props._diagram.dimension.boxHeight
  } else {
    width = width + node._props._diagram.dimension.spaceX
    height = height + node._props._diagram.dimension.spaceY
  }

  if (node._props._diagram.geometry.width) {
    const diff = (node._props as any)._diagram.geometry.width - width
    node._props._diagram.geometry.width = width
    expandDimension(node, 'width', diff)
  } else {
    node._props._diagram.geometry.width = width
  }

  if (node._props._diagram.geometry.height) {
    const diff = (node._props as any)._diagram.geometry.height - height
    node._props._diagram.geometry.height = height
    expandDimension(node, 'height', diff)
  } else {
    node._props._diagram.geometry.height = height
  }

  node._props._diagram.geometry.x = x
  node._props._diagram.geometry.y = y
  ;(node._props as any)._diagram.state.width =
    node._props._diagram.geometry.width
  ;(node._props as any)._diagram.state.height =
    node._props._diagram.geometry.height
  if (node._props._diagram.isTextOutside) {
    node._props._diagram.state.height = node._props._diagram.state.height +
      node._props._diagram.dimension.textHeight
  }
}

export const p31ResolveDimension = ({ rootNode }: DrawioContext) => {
  resolveDimensions(rootNode, 0, 0)
}
