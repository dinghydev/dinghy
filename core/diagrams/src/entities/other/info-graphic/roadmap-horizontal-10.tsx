import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROADMAP_HORIZONTAL_10 = {
  _style: {
    entity:
      'shape=ellipse;strokeWidth=6;strokeColor=#12AAB5;fontSize=15;html=1;whiteSpace=wrap;fontStyle=1;fontColor=#12AAB5;',
  },
  _width: 9,
  _height: 300,
}

export function RoadmapHorizontal10(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROADMAP_HORIZONTAL_10)} />
}
