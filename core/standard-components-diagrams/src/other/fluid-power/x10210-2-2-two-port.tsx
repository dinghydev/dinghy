import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10210_2_2_TWO_PORT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10210;points=[[0.67,0,0],[0.67,1,0],[0,0.62,0],[0.37,0.25,0],[0.37,0.75,0]]',
  },
  _width: 125.54,
  _height: 75.22,
}

export function X1021022TwoPort(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10210_2_2_TWO_PORT}
      {...props}
      _style={extendStyle(X10210_2_2_TWO_PORT, props)}
    />
  )
}
