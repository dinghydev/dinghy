import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_8 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#AE4132;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#AE4132;shadow=1;',
  },
  _width: 7,
  _height: 330,
}

export function RoadmapDiagonal8(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROADMAP_DIAGONAL_8)} />
}
