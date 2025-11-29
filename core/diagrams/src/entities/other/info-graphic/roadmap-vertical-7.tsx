import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_VERTICAL_7 = {
  _style: {
    entity:
      'rounded=1;strokeColor=none;fillColor=#EEEEEE;align=center;arcSize=12;verticalAlign=top;whiteSpace=wrap;html=1;fontSize=12;',
  },
  _width: 5,
  _height: 400,
}

export function RoadmapVertical7(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROADMAP_VERTICAL_7)} />
}
