import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROADMAP_VERTICAL_4 = {
  _style:
    'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;direction=south;fillColor=#AE4132;strokeColor=none;rounded=0;',
  _width: 2,
  _height: 400,
}

export function RoadmapVertical4(props: DiagramNodeProps) {
  return <Shape {...ROADMAP_VERTICAL_4} {...props} />
}
