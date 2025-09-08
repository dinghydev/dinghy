import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_9 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#23445D;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#23445D;',
  },
  _original_width: 8,
  _original_height: 300,
}

export function RoadmapHorizontal9(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_9}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_9, props)}
    />
  )
}
