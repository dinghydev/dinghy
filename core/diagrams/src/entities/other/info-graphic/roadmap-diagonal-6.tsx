import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_6 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#10739E;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#10739E;shadow=1;',
  },
  _width: 5,
  _height: 330,
}

export function RoadmapDiagonal6(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROADMAP_DIAGONAL_6)} />
}
