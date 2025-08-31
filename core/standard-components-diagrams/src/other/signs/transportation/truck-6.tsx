import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRUCK_6 = {
  _style:
    'shape=mxgraph.signs.transportation.truck_6;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 79,
  _height: 98,
}

export function Truck6(props: DiagramNodeProps) {
  return <Shape {...TRUCK_6} {...props} _style={extendStyle(TRUCK_6, props)} />
}
