import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRUCK_6 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.truck_6;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 79,
  _original_height: 98,
}

export function Truck6(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRUCK_6)} />
}
