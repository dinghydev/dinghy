import type { Props } from '@dinghy/base-components'
import type { DrawioContext, DrawioNodeTree } from '../types.ts'
import { deepResolve } from '@dinghy/base-components'

function resolveElementProps(_node: DrawioNodeTree): Props {
  return deepResolve(_node._props._diagram.element)
}

function resolveGeometryProps(_node: DrawioNodeTree): Props {
  return deepResolve(_node._props._diagram.geometry)
}

function generate(context: DrawioContext, _node: DrawioNodeTree) {
  const mxGeometry = { type: 'mxGeometry', props: resolveGeometryProps(_node) }
  const mxCell = { type: 'mxCell', props: resolveElementProps(_node) }
  mxCell.props.children = [mxGeometry]
  context.rootElements.push(mxCell as any)
  _node._children.map((c: any) => generate(context, c))
}

export const p82GenerateShapes = (context: DrawioContext) =>
  generate(context, context.rootNode)
