import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_VERTICAL_16 = {
  _style: {
    entity:
      'fillColor=#10739E;strokecolor=none;rounded=1;fontColor=#FFFFFF;strokeColor=none;fontStyle=1;fontSize=14;whiteSpace=wrap;html=1;',
  },
  _original_width: 9,
  _original_height: 510,
}

export function RoadmapVertical16(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_16}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_16, props)}
    />
  )
}
