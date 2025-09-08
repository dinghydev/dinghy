import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUS_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.bus_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 98,
}

export function Bus1(props: DiagramNodeProps) {
  return <Shape {...BUS_1} {...props} _style={extendStyle(BUS_1, props)} />
}
