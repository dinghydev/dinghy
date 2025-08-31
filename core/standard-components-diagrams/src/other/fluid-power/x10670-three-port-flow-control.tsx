import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10670_THREE_PORT_FLOW_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10670;points=[[0.372,0,0],[0.372,1,0],[0.812,0,0]]',
  },
  _width: 74.1,
  _height: 120.8,
}

export function X10670ThreePortFlowControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10670_THREE_PORT_FLOW_CONTROL}
      {...props}
      _style={extendStyle(X10670_THREE_PORT_FLOW_CONTROL, props)}
    />
  )
}
