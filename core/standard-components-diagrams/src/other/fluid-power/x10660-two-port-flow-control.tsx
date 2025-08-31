import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10660_TWO_PORT_FLOW_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10660;points=[[0.33,0,0],[0.33,1,0]]',
  },
  _width: 83.74,
  _height: 149.34,
}

export function X10660TwoPortFlowControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10660_TWO_PORT_FLOW_CONTROL}
      {...props}
      _style={extendStyle(X10660_TWO_PORT_FLOW_CONTROL, props)}
    />
  )
}
