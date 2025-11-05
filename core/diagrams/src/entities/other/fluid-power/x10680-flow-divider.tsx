import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10680_FLOW_DIVIDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10680;points=[[0.3,0,0],[0.7,0,0],[0.5,1,0]]',
  },
  _width: 92.78,
  _height: 112.16,
}

export function X10680FlowDivider(props: NodeProps) {
  return (
    <Shape
      {...X10680_FLOW_DIVIDER}
      {...props}
      _style={extendStyle(X10680_FLOW_DIVIDER, props)}
    />
  )
}
