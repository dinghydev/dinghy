import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUS_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bus_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 33,
}

export function Bus3(props: DiagramNodeProps) {
  return <Shape {...BUS_3} {...props} _style={extendStyle(BUS_3, props)} />
}
