import type { DrawioContext, DrawioNodeTree } from '../types.ts'

const horizontalSpread = ({
  _children,
  _props: { _diagram },
}: DrawioNodeTree) => {
  const { moveableRight } = _children[0]._props._diagram.state
  if (moveableRight > 0) {
    if (_diagram.flags.isDirectionVertical) {
      const space = moveableRight / 2
      _children.map((child: DrawioNodeTree) => {
        ;(child._props as any)._diagram.geometry.x += space
        ;(child._props as any)._diagram.state.moveableRight = 0
      })
    } else {
      const space = moveableRight / _children.length / 2
      _children.map((child: DrawioNodeTree, i: number) => {
        ;(child._props as any)._diagram.geometry.x += space + space * i * 2
        ;(child._props as any)._diagram.state.moveableRight = 0
      })
    }
  }
}

const verticalSpread = ({
  _children,
  _props: { _diagram },
}: DrawioNodeTree) => {
  if (_diagram.flags.isDirectionVertical) {
    _children.map((child: DrawioNodeTree, i: number) => {
      const { moveableBottom } = child._props._diagram.state
      const space = moveableBottom / _children.length / 2
      ;(child._props as any)._diagram.geometry.y += space + space * i * 2
      ;(child._props as any)._diagram.state.moveableBottom = 0
    })
  } else {
    _children.map((child: DrawioNodeTree) => {
      const { moveableBottom } = child._props._diagram.state
      const space = moveableBottom / 2
      ;(child._props as any)._diagram.geometry.y += space
      ;(child._props as any)._diagram.state.moveableBottom = 0
    })
  }
}

const childrenNoDependents = (node: DrawioNodeTree) => {
  return node._children.every(
    (child: any) => !child._dependsOn && !child._dependsBy,
  )
}

const applyDistribution = (node: DrawioNodeTree) => {
  if (node._children.length > 0) {
    const { _diagram } = node._props
    const { isDistributionHorizontal, isDistributionVertical } = _diagram
      .flags as any
    if (isDistributionHorizontal || childrenNoDependents(node)) {
      horizontalSpread(node)
    }
    if (isDistributionVertical || childrenNoDependents(node)) {
      verticalSpread(node)
    }
  }
  node._children.map((child: DrawioNodeTree) => applyDistribution(child))
}

export const p32ApplyDistribution = ({ rootNode }: DrawioContext) => {
  applyDistribution(rootNode)
}
