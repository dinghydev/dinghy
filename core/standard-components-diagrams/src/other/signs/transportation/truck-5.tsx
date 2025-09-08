import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRUCK_5 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.truck_5;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 27,
}

export function Truck5(props: DiagramNodeProps) {
  return <Shape {...TRUCK_5} {...props} _style={extendStyle(TRUCK_5, props)} />
}
