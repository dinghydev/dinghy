import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UNEVEN_ROAD = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.uneven_road;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 68,
}

export function UnevenRoad(props: DiagramNodeProps) {
  return (
    <Shape
      {...UNEVEN_ROAD}
      {...props}
      _style={extendStyle(UNEVEN_ROAD, props)}
    />
  )
}
