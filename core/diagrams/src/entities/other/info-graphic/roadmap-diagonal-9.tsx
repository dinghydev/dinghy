import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_9 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#23445D;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#23445D;shadow=1;',
  },
  _width: 8,
  _height: 330,
}

export function RoadmapDiagonal9(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROADMAP_DIAGONAL_9)} />
}
