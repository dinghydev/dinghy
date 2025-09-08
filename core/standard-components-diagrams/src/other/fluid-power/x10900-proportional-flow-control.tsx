import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10900_PROPORTIONAL_FLOW_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10900;points=[[0.665,0,0],[0.665,1,0],[0.785,0,0],[0.785,1,0]]',
  },
  _original_width: 153.26,
  _original_height: 75.16,
}

export function X10900ProportionalFlowControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10900_PROPORTIONAL_FLOW_CONTROL}
      {...props}
      _style={extendStyle(X10900_PROPORTIONAL_FLOW_CONTROL, props)}
    />
  )
}
