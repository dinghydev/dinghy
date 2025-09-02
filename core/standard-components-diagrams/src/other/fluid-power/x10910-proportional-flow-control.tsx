import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10910_PROPORTIONAL_FLOW_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10910;points=[[0.768,0.197,0],[0.768,1,0]]',
  },
  _original_width: 181.3,
  _original_height: 93.44,
}

export function X10910ProportionalFlowControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10910_PROPORTIONAL_FLOW_CONTROL}
      {...props}
      _style={extendStyle(X10910_PROPORTIONAL_FLOW_CONTROL, props)}
    />
  )
}
