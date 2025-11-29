import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_DIAGONAL_11 = {
  _style: {
    entity:
      'rounded=1;strokeColor=none;fillColor=#EEEEEE;align=center;arcSize=12;verticalAlign=top;whiteSpace=wrap;html=1;fontSize=12;spacing=3;shadow=0;',
  },
  _width: 10,
  _height: 330,
}

export function RoadmapDiagonal11(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROADMAP_DIAGONAL_11)} />
}
