import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_VERTICAL_20 = {
  _style:
    'fillColor=#12AAB5;strokecolor=none;rounded=1;fontColor=#FFFFFF;strokeColor=none;fontStyle=1;fontSize=14;whiteSpace=wrap;html=1;',
  _width: 13,
  _height: 510,
}

export function RoadmapVertical20(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_VERTICAL_20} {...props} />
}
