import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROADMAP_VERTICAL_19 = {
  _style: {
    entity:
      'fillColor=#23445D;strokecolor=none;rounded=1;fontColor=#FFFFFF;strokeColor=none;fontStyle=1;fontSize=14;whiteSpace=wrap;html=1;',
  },
  _width: 12,
  _height: 510,
}

export function RoadmapVertical19(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_19}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_19, props)}
    />
  )
}
