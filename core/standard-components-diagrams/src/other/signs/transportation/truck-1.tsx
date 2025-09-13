import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRUCK_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.truck_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 51,
}

export function Truck1(props: DiagramNodeProps) {
  return <Shape {...TRUCK_1} {...props} _style={extendStyle(TRUCK_1, props)} />
}
