import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11300_VARIABLE_DISPLACEMENT_PUMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11300;points=[[0.03,0.895,0],[0.742,0,0],[0.742,0.815,0],[0.871,0.833,0]]',
  },
  _original_width: 287.96,
  _original_height: 229.08,
}

export function X11300VariableDisplacementPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11300_VARIABLE_DISPLACEMENT_PUMP}
      {...props}
      _style={extendStyle(X11300_VARIABLE_DISPLACEMENT_PUMP, props)}
    />
  )
}
