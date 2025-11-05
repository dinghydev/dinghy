import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_VERTICAL_2 = {
  _style: {
    entity:
      'rounded=1;strokeColor=none;fillColor=#DDDDDD;align=center;arcSize=12;verticalAlign=top;whiteSpace=wrap;html=1;fontSize=12;',
  },
  _width: 1,
  _height: 70,
}

export function RoadmapVertical2(props: NodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_2}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_2, props)}
    />
  )
}
