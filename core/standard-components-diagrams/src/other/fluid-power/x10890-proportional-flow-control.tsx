import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10890_PROPORTIONAL_FLOW_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10890;points=[[0.667,0,0],[0.667,1,0]]',
  },
  _width: 125.4,
  _height: 75.02,
}

export function X10890ProportionalFlowControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10890_PROPORTIONAL_FLOW_CONTROL}
      {...props}
      _style={extendStyle(X10890_PROPORTIONAL_FLOW_CONTROL, props)}
    />
  )
}
