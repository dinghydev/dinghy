import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROADMAP_VERTICAL_9 = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;shadow=0;fillColor=none;strokeColor=#333333;fontSize=16;align=center;strokeWidth=2;',
  },
  _width: 1,
  _height: 510,
}

export function RoadmapVertical9(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROADMAP_VERTICAL_9}
      {...props}
      _style={extendStyle(ROADMAP_VERTICAL_9, props)}
    />
  )
}
