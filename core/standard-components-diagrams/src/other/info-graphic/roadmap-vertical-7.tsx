import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_VERTICAL_7 = {
  _style:
    'rounded=1;strokeColor=none;fillColor=#EEEEEE;align=center;arcSize=12;verticalAlign=top;whiteSpace=wrap;html=1;fontSize=12;',
  _width: 5,
  _height: 400,
}

export function RoadmapVertical7(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_VERTICAL_7} {...props} />
}
