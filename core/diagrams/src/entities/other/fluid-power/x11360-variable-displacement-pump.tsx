import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11360_VARIABLE_DISPLACEMENT_PUMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11360;points=[[0.75,0,0],[0.75,0.982,0],[0.875,1,0]]',
  },
  _width: 297.38,
  _height: 246.66,
}

export function X11360VariableDisplacementPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11360_VARIABLE_DISPLACEMENT_PUMP}
      {...props}
      _style={extendStyle(X11360_VARIABLE_DISPLACEMENT_PUMP, props)}
    />
  )
}
