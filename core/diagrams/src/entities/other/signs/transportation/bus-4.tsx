import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUS_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bus_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 81,
  _original_height: 100,
}

export function Bus4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUS_4)} />
}
