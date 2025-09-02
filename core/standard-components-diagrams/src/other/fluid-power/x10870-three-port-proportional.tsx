import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10870_THREE_PORT_PROPORTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10870;points=[[0.23,0,0],[0.17,1,0],[0.285,1,0]]',
  },
  _original_width: 162.38,
  _original_height: 74.92,
}

export function X10870ThreePortProportional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10870_THREE_PORT_PROPORTIONAL}
      {...props}
      _style={extendStyle(X10870_THREE_PORT_PROPORTIONAL, props)}
    />
  )
}
