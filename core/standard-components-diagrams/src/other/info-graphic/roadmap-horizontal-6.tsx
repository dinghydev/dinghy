import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_6 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#10739E;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#10739E;',
  },
  _original_width: 5,
  _original_height: 300,
}

export function RoadmapHorizontal6(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_6}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_6, props)}
    />
  )
}
