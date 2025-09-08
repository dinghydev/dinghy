import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11380_VARIABLE_DISPLACEMENT_PUMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11380;points=[[0.645,0,0],[0.645,0.74,0]]',
  },
  _original_width: 122.38,
  _original_height: 125.68,
}

export function X11380VariableDisplacementPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11380_VARIABLE_DISPLACEMENT_PUMP}
      {...props}
      _style={extendStyle(X11380_VARIABLE_DISPLACEMENT_PUMP, props)}
    />
  )
}
