import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11230_VARIABLE_DISPLACEMENT_PUMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11230;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _original_width: 84.54,
  _original_height: 93.94,
}

export function X11230VariableDisplacementPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11230_VARIABLE_DISPLACEMENT_PUMP}
      {...props}
      _style={extendStyle(X11230_VARIABLE_DISPLACEMENT_PUMP, props)}
    />
  )
}
