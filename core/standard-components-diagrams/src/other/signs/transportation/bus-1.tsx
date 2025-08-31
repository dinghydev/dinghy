import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUS_1 = {
  _style:
    'shape=mxgraph.signs.transportation.bus_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 98,
}

export function Bus1(props: DiagramNodeProps) {
  return <Shape {...BUS_1} {...props} _style={extendStyle(BUS_1, props)} />
}
