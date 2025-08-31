import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10610_THREE_PORT_PRESSURE_REDUCING = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10610;points=[[0.35,0,0],[0.35,1,0],[0.585,1,0]]',
  _width: 79.06,
  _height: 74.7,
}

export function X10610ThreePortPressureReducing(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10610_THREE_PORT_PRESSURE_REDUCING}
      {...props}
      _style={extendStyle(X10610_THREE_PORT_PRESSURE_REDUCING, props)}
    />
  )
}
