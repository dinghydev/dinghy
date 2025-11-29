import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_7 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#F2931E;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#F2931E;shadow=1;',
  },
  _width: 6,
  _height: 330,
}

export function RoadmapDiagonal7(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROADMAP_DIAGONAL_7)} />
}
