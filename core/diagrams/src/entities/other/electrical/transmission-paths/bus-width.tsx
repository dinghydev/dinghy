import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUS_WIDTH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.bus_width;pointerEvents=1;',
  },
  _width: 130,
  _height: 156,
}

export function BusWidth(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUS_WIDTH)} />
}
