import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRUCK_7 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.truck_7;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 41,
}

export function Truck7(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRUCK_7)} />
}
