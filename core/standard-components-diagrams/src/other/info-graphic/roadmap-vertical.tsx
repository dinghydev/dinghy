import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_VERTICAL = {
  _style:
    'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;direction=south;fillColor=#10739E;strokeColor=none;rounded=0;',
  _width: 0,
  _height: 70,
}

export function RoadmapVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL, props)}
    />
  )
}
