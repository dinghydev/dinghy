import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_7 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#F2931E;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#F2931E;',
  },
  _width: 6,
  _height: 300,
}

export function RoadmapHorizontal7(props: NodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_7}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_7, props)}
    />
  )
}
