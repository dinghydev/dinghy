import type { Props } from '@reactiac/base-components'
import type { DrawioContext, DrawioNodeTree } from '../types.js'
import { utils } from '@reactiac/base-components'
const { deepResolve } = utils

function resolveElementProps(_node: DrawioNodeTree): Props {
  return deepResolve(_node, _node._props._diagram.element)
}

function resolveGeometryProps(_node: DrawioNodeTree): Props {
  return deepResolve(_node, _node._props._diagram.geometry)
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
