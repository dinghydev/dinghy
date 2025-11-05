import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_6 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#10739E;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#10739E;',
  },
  _width: 5,
  _height: 300,
}

export function RoadmapHorizontal6(props: NodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_6}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_6, props)}
    />
  )
}
