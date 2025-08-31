import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_VERTICAL_3 = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;direction=south;fillColor=#F2931E;strokeColor=none;rounded=0;',
  },
  _width: 1,
  _height: 400,
}

export function RoadmapVertical3(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_3}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_3, props)}
    />
  )
}
