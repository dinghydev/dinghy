import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10640_FLOW_CONTROL_VALVE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10640;points=[[0.25,0,0],[0.25,1,0]]',
  _width: 74.06,
  _height: 111.96,
}

export function X10640FlowControlValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10640_FLOW_CONTROL_VALVE}
      {...props}
      _style={extendStyle(X10640_FLOW_CONTROL_VALVE, props)}
    />
  )
}
