import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_VERTICAL_20 = {
  _style: {
    entity:
      'fillColor=#12AAB5;strokecolor=none;rounded=1;fontColor=#FFFFFF;strokeColor=none;fontStyle=1;fontSize=14;whiteSpace=wrap;html=1;',
  },
  _original_width: 13,
  _original_height: 510,
}

export function RoadmapVertical20(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_20}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_20, props)}
    />
  )
}
