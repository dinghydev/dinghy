import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRUCK_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.truck_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 33,
}

export function Truck4(props: DiagramNodeProps) {
  return <Shape {...TRUCK_4} {...props} _style={extendStyle(TRUCK_4, props)} />
}
