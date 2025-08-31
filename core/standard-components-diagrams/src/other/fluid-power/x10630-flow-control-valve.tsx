import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10630_FLOW_CONTROL_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10630;points=[[0.36,0,0],[0.36,1,0]]',
  },
  _width: 33.98,
  _height: 75.14,
}

export function X10630FlowControlValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10630_FLOW_CONTROL_VALVE}
      {...props}
      _style={extendStyle(X10630_FLOW_CONTROL_VALVE, props)}
    />
  )
}
