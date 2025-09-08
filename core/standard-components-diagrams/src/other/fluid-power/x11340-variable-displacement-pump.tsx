import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11340_VARIABLE_DISPLACEMENT_PUMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11340;points=[[0.6,0,0],[0.6,1,0],[0.8,1,0]]',
  },
  _original_width: 185.84,
  _original_height: 205.22,
}

export function X11340VariableDisplacementPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11340_VARIABLE_DISPLACEMENT_PUMP}
      {...props}
      _style={extendStyle(X11340_VARIABLE_DISPLACEMENT_PUMP, props)}
    />
  )
}
