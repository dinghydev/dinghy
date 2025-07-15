import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_VERTICAL_9 = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;fillColor=none;strokeColor=#333333;fontSize=16;align=center;strokeWidth=2;',
  _width: 1,
  _height: 510,
}

export function RoadmapVertical9(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_VERTICAL_9} {...props} />
}
