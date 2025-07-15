import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_VERTICAL_6 = {
  _style:
    'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;direction=south;fillColor=#12AAB5;strokeColor=none;rounded=0;',
  _width: 4,
  _height: 400,
}

export function RoadmapVertical6(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_VERTICAL_6} {...props} />
}
