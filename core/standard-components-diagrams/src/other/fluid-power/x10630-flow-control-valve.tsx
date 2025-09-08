import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10630_FLOW_CONTROL_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10630;points=[[0.36,0,0],[0.36,1,0]]',
  },
  _original_width: 33.98,
  _original_height: 75.14,
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
