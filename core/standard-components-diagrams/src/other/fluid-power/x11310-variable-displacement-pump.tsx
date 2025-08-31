import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11310_VARIABLE_DISPLACEMENT_PUMP = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11310;points=[[0.03,0.91,0],[0.75,0,0],[0.75,0.98,0],[0.874,1,0]]',
  _width: 297.6,
  _height: 266.18,
}

export function X11310VariableDisplacementPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11310_VARIABLE_DISPLACEMENT_PUMP}
      {...props}
      _style={extendStyle(X11310_VARIABLE_DISPLACEMENT_PUMP, props)}
    />
  )
}
