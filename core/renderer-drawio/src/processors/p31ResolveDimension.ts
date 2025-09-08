import { deepResolve } from '@dinghy/base-components'
import type { DimensionType, DrawioContext, DrawioNodeTree } from '../types.ts'

const applySameDimension = (
  node: DrawioNodeTree,
  dimension: DimensionType,
  maxDimension: number,
) => {
  node._children.map((child) => {
    if (child._props._diagram.flags.isFixedPosition) {
      return
    }
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
        } else {
          if (dimension === 'width') {
            child._props._diagram.state.moveableRight += diff
          } else {
            child._props._diagram.state.moveableBottom += diff
          }
        }
      }
    }
  })
}

const expandableChildren = (node: DrawioNodeTree, dimension: DimensionType) =>
  node._children.filter(
    (child: DrawioNodeTree) =>
      !child._props._diagram.flags.isFixedPosition &&
      !child._props._diagram.flags.isEntity &&
      ((dimension === 'width' &&
        !child._props._width) ||
        (dimension === 'height' && !child._props._height)),
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
    const gChildren = expandableChildren(node, dimension)
    const evenDiff = fullColumn
      ? diff
      : (gChildren.length > 0 ? diff / gChildren.length : 0)
    node._children.map((child: DrawioNodeTree) => {
      if (child._props._diagram.flags.isFixedPosition) {
        return
      }
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
          } else if (gChildren.length == 0) {
            child._props._diagram.state.moveableRight += diff
          }
        } else {
          if (!child._props._diagram.flags.isFixedHeight) {
            expandDimension(child, dimension, evenDiff)
            ;(child._props as any)._diagram.geometry.y += expanded
            if (!fullColumn) {
              expanded += evenDiff
            }
          } else if (gChildren.length == 0) {
            child._props._diagram.state.moveableBottom += diff
          }
        }
      }
    })
  }
}

const resolveDimensions = (node: DrawioNodeTree, x: number, y: number) => {
  node._props._diagram.state = {
    moveableRight: 0,
    moveableBottom: 0,
  } as any

  let width = 0
  let height = 0

  let childX = node._props._diagram.dimension.padding.left
  let childY = node._props._diagram.dimension.padding.top

  for (const child of node._children) {
    resolveDimensions(child, childX, childY)
    if (child._props._diagram.flags.isFixedPosition) {
      continue
    }

    if (node._props._diagram.flags.isDirectionVertical) {
      if (child._props._diagram.state.height > 0) {
        childY = childY + child._props._diagram.state.height
        height = height + child._props._diagram.state.height
        width = Math.max(
          width,
          child._props._diagram.state.width,
        )
      }
    } else {
      if (child._props._diagram.state.width > 0) {
        childX = childX + child._props._diagram.state.width
        width = width + child._props._diagram.state.width
        height = Math.max(
          height,
          child._props._diagram.state.height,
        )
      }
    }
  }
  if (node._children.length > 0) {
    const dimension = node._props._diagram.flags.isDirectionVertical
      ? 'width'
      : 'height'
    const maxDimension = Math.max(
      ...node._children.map(
        (child: any) =>
          child._props._diagram.flags.isFixedPosition
            ? 0
            : child._props._diagram.state[dimension],
      ),
    )
    applySameDimension(node, dimension, maxDimension)
  }

  if (width === 0) {
    width = node._props._diagram.dimension.boxWidth
    height = node._props._diagram.dimension.boxHeight
  } else {
    width = width +
      node._props._diagram.dimension.padding.left +
      node._props._diagram.dimension.padding.right
    height = height +
      node._props._diagram.dimension.padding.top +
      node._props._diagram.dimension.padding.bottom
  }

  if (node._props._diagram.geometry.width === undefined) {
    node._props._diagram.geometry.width = width
    node._props._diagram.state.moveableRight = 0
  } else {
    deepResolve(node, (node._props as any)._diagram.geometry, 'width')
    const diff = (node._props as any)._diagram.geometry.width - width
    node._props._diagram.geometry.width = width
    expandDimension(node, 'width', diff)
  }

  if (node._props._diagram.geometry.height === undefined) {
    node._props._diagram.geometry.height = height
    node._props._diagram.state.moveableBottom = 0
  } else {
    deepResolve(node, (node._props as any)._diagram.geometry, 'height')
    const diff = (node._props as any)._diagram.geometry.height - height
    node._props._diagram.geometry.height = height
    expandDimension(node, 'height', diff)
  }

  node._props._diagram.state.width = node._props._diagram.geometry.width +
    node._props._diagram.dimension.margin.left +
    node._props._diagram.dimension.margin.right
  node._props._diagram.state.height = node._props._diagram.geometry.height +
    node._props._diagram.dimension.margin.top +
    node._props._diagram.dimension.margin.bottom
  if (node._props._diagram.flags.isTextOutside) {
    node._props._diagram.state.height = node._props._diagram.state.height +
      node._props._diagram.dimension.textHeight
  }

  if (!node._props._diagram.flags.isFixedPosition) {
    node._props._diagram.geometry.x = x +
      node._props._diagram.dimension.margin.left
    node._props._diagram.geometry.y = y +
      node._props._diagram.dimension.margin.top
  }
}

export const p31ResolveDimension = ({ rootNode }: DrawioContext) => {
  resolveDimensions(rootNode, 0, 0)
}
