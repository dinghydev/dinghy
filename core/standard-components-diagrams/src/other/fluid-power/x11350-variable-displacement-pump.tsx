import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11350_VARIABLE_DISPLACEMENT_PUMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11350;points=[[0.69,0,0],[0.69,0.98,0],[0.845,1,0]]',
  },
  _original_width: 241.56,
  _original_height: 209.6,
}

export function X11350VariableDisplacementPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11350_VARIABLE_DISPLACEMENT_PUMP}
      {...props}
      _style={extendStyle(X11350_VARIABLE_DISPLACEMENT_PUMP, props)}
    />
  )
}
