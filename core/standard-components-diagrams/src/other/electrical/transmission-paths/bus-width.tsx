import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUS_WIDTH = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.bus_width;pointerEvents=1;',
  _width: 130,
  _height: 156,
}

export function BusWidth(props: DiagramNodeProps) {
  return <Shape {...BUS_WIDTH} {...props} />
}
