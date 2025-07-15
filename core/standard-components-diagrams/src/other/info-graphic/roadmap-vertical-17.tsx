import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_VERTICAL_17 = {
  _style:
    'fillColor=#F2931E;strokecolor=none;rounded=1;fontColor=#FFFFFF;strokeColor=none;fontStyle=1;fontSize=14;whiteSpace=wrap;html=1;',
  _width: 10,
  _height: 510,
}

export function RoadmapVertical17(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_VERTICAL_17} {...props} />
}
