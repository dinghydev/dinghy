import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRUCK = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.truck;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 138,
  _height: 53,
}

export function Truck(props: DiagramNodeProps) {
  return <Shape {...TRUCK} {...props} _style={extendStyle(TRUCK, props)} />
}
