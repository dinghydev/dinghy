import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUS_4 = {
  _style:
    'shape=mxgraph.signs.transportation.bus_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 81,
  _height: 100,
}

export function Bus4(props: DiagramNodeProps) {
  return <Shape {...BUS_4} {...props} />
}
