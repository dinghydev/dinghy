import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PC_ROUTERCARD = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.pc_routercard;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 78,
  _height: 70,
}

export function PcRoutercard(props: DiagramNodeProps) {
  return (
    <Shape
      {...PC_ROUTERCARD}
      {...props}
      _style={extendStyle(PC_ROUTERCARD, props)}
    />
  )
}
