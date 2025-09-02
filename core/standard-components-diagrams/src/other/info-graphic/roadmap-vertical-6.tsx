import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_VERTICAL_6 = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;direction=south;fillColor=#12AAB5;strokeColor=none;rounded=0;',
  },
  _original_width: 4,
  _original_height: 400,
}

export function RoadmapVertical6(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_6}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_6, props)}
    />
  )
}
