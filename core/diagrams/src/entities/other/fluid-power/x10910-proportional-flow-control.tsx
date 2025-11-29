import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10910_PROPORTIONAL_FLOW_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10910;points=[[0.768,0.197,0],[0.768,1,0]]',
  },
  _width: 181.3,
  _height: 93.44,
}

export function X10910ProportionalFlowControl(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X10910_PROPORTIONAL_FLOW_CONTROL)}
    />
  )
}
