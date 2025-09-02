import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10650_FLOW_CONTROL_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10650;points=[[0.695,0,0],[0.695,1,0]]',
  },
  _original_width: 137,
  _original_height: 74.92,
}

export function X10650FlowControlValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10650_FLOW_CONTROL_VALVE}
      {...props}
      _style={extendStyle(X10650_FLOW_CONTROL_VALVE, props)}
    />
  )
}
