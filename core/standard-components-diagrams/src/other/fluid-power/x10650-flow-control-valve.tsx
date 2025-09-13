import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10650_FLOW_CONTROL_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10650;points=[[0.695,0,0],[0.695,1,0]]',
  },
  _width: 137,
  _height: 74.92,
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
