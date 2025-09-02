import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRUCK = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.truck;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 138,
  _original_height: 53,
}

export function Truck(props: DiagramNodeProps) {
  return <Shape {...TRUCK} {...props} _style={extendStyle(TRUCK, props)} />
}
