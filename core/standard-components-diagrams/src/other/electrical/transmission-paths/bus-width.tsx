import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUS_WIDTH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.bus_width;pointerEvents=1;',
  },
  _original_width: 130,
  _original_height: 156,
}

export function BusWidth(props: DiagramNodeProps) {
  return (
    <Shape {...BUS_WIDTH} {...props} _style={extendStyle(BUS_WIDTH, props)} />
  )
}
