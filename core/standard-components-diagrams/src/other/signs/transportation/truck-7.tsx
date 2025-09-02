import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRUCK_7 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.truck_7;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 41,
}

export function Truck7(props: DiagramNodeProps) {
  return <Shape {...TRUCK_7} {...props} _style={extendStyle(TRUCK_7, props)} />
}
