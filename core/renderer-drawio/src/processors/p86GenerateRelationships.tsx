import type {
  DrawioContext,
  DrawioNodeTree,
  ElementProps,
  Point,
} from '../types.ts'
import { deepResolve } from '@reactiac/base-components'
import { absLeft, absTop } from '../utils.ts'

function resolveElementProps({
  _props: { _node, _diagram },
}: DrawioNodeTree): ElementProps {
  return deepResolve(_node, _diagram.dependency)
}

const resolvePoint = (node: DrawioNodeTree, point: Point) => {
  const x = absLeft(node._parent) + point.x
  const y = absTop(node._parent) + point.y
  return {
    type: 'mxPoint',
    props: {
      ...point,
      x,
      y,
    },
  }
}

const createPoints = (node: DrawioNodeTree, points: Point[]) => {
  const mxPoints: any[] = []
  const arrayPoints: any[] = []
  points.map((point) => {
    if (point.as) {
      mxPoints.push(resolvePoint(node, point))
    } else {
      arrayPoints.push(resolvePoint(node, point))
    }
  })
  if (arrayPoints.length > 0) {
    mxPoints.push({
      type: 'Array',
      props: {
        as: 'points',
        children: arrayPoints,
      },
    })
  }
  return mxPoints
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
    mxGeometry.props.children = createPoints(_node, points)
  }
  const mxCell = { type: 'mxCell', props: resolveElementProps(_node) }
  deepResolve(_node, _node._props, 'title')
  if (_node._props.title !== 'Dependency') {
    mxCell.props.value = _node._props.title
  }
  mxCell.props.children = [mxGeometry]
  context.rootElements.push(mxCell as any)
}

export const p86GenerateRelationships = (context: DrawioContext) => {
  context.dependencies.map((d) => generate(context, d))
}
