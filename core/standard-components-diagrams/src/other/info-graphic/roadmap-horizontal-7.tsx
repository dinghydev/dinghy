import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_7 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#F2931E;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#F2931E;',
  },
  _original_width: 6,
  _original_height: 300,
}

export function RoadmapHorizontal7(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_7}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_7, props)}
    />
  )
}
