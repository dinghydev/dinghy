import type {
  DrawioContext,
  DrawioNodeProps,
  DrawioNodeTree,
} from '../types.ts'

function resolve(_props: DrawioNodeProps) {
  if (_props._diagram.flags.isEntity) {
    _props._node._children.map((c: DrawioNodeTree) => {
      c._props._diagram.flags.isHidden = true
    })
  } else {
    _props._node._children.map((c: DrawioNodeTree) => resolve(c._props))
    _props._diagram.flags.isEntity =
      _props._node._children.filter(
        (c: DrawioNodeTree) => !c._props._diagram.flags.isHidden,
      ).length === 0
  }
}

export const p21ResolveFlagIsEntity = ({ rootNode }: DrawioContext) => {
  resolve(rootNode._props)
}
