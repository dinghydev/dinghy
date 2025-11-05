import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_8 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#AE4132;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#AE4132;',
  },
  _width: 7,
  _height: 300,
}

export function RoadmapHorizontal8(props: NodeProps) {
  return (
    <Shape
      {...ROADMAP_HORIZONTAL_8}
      {...props}
      _style={extendStyle(ROADMAP_HORIZONTAL_8, props)}
    />
  )
}
