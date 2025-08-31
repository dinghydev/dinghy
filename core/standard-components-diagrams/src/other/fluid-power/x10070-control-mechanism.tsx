import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10070_CONTROL_MECHANISM = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10070;points=[[1,0.38,0],[1,0.5,0],[1,0.62,0]]',
  _width: 65.2,
  _height: 37.28,
}

export function X10070ControlMechanism(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10070_CONTROL_MECHANISM}
      {...props}
      _style={extendStyle(X10070_CONTROL_MECHANISM, props)}
    />
  )
}
