import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRUCK_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.truck_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 49,
}

export function Truck2(props: DiagramNodeProps) {
  return <Shape {...TRUCK_2} {...props} _style={extendStyle(TRUCK_2, props)} />
}
