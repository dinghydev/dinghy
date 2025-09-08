import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_11 = {
  _style: {
    entity:
      'rounded=1;strokeColor=none;fillColor=#EEEEEE;align=center;arcSize=12;verticalAlign=top;whiteSpace=wrap;html=1;fontSize=12;spacing=3;shadow=0;',
  },
  _original_width: 10,
  _original_height: 330,
}

export function RoadmapDiagonal11(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_DIAGONAL_11}
      {...props}
      _style={extendStyle(ROADMAP_DIAGONAL_11, props)}
    />
  )
}
