import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUS_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bus_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 26,
}

export function Bus2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUS_2)} />
}
