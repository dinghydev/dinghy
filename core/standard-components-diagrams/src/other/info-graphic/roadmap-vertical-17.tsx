import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_VERTICAL_17 = {
  _style: {
    entity:
      'fillColor=#F2931E;strokecolor=none;rounded=1;fontColor=#FFFFFF;strokeColor=none;fontStyle=1;fontSize=14;whiteSpace=wrap;html=1;',
  },
  _original_width: 10,
  _original_height: 510,
}

export function RoadmapVertical17(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_17}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_17, props)}
    />
  )
}
