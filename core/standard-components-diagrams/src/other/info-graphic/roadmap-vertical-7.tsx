import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_VERTICAL_7 = {
  _style: {
    entity:
      'rounded=1;strokeColor=none;fillColor=#EEEEEE;align=center;arcSize=12;verticalAlign=top;whiteSpace=wrap;html=1;fontSize=12;',
  },
  _original_width: 5,
  _original_height: 400,
}

export function RoadmapVertical7(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_7}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_7, props)}
    />
  )
}
