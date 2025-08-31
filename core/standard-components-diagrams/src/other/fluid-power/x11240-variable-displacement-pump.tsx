import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11240_VARIABLE_DISPLACEMENT_PUMP = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11240;points=[[0.567,0,0],[0.567,1,0],[0.95,1,0]]',
  _width: 97.7,
  _height: 93.94,
}

export function X11240VariableDisplacementPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11240_VARIABLE_DISPLACEMENT_PUMP}
      {...props}
      _style={extendStyle(X11240_VARIABLE_DISPLACEMENT_PUMP, props)}
    />
  )
}
