import type { DrawioContext, DrawioNodeTree, ElementProps } from '../types.js'
import { utils } from '@reactiac/base-components'
const { deepResolve } = utils

function resolveElementProps({
  _props: { _node, _diagram },
}: DrawioNodeTree): ElementProps {
  return deepResolve(_node, _diagram.dependency)
}

const createPoints = (points: { x: number; y: number }[]) => {
  return {
    type: 'Array',
    props: {
      as: 'points',
      children: points.map((point) => ({
        type: 'mxPoint',
        props: { x: point.x, y: point.y },
      })),
    },
  }
}

function resolveGeometryProps({
  _props: { _node, _diagram },
}: DrawioNodeTree): ElementProps {
  return deepResolve(_node, _diagram.geometry)
}

function generate(context: DrawioContext, _node: DrawioNodeTree) {
  const mxGeometry = {
    type: 'mxGeometry',
    props: resolveGeometryProps(_node),
  }
  const points = _node._props._diagram.points
  if (points) {
    mxGeometry.props.children = [createPoints(points)]
  }
  const mxCell = { type: 'mxCell', props: resolveElementProps(_node) }
  mxCell.props.children = [mxGeometry]
  context.rootElements.push(mxCell as any)
}

export const p86GenerateRelationships = (context: DrawioContext) => {
  context.dependencies.map((d) => generate(context, d))
}
