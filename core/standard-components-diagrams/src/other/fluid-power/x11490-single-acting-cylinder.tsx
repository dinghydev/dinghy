import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11490_SINGLE_ACTING_CYLINDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11490;points=[[0.047,1,0]]',
  },
  _original_width: 102.14,
  _original_height: 65.4,
}

export function X11490SingleActingCylinder(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11490_SINGLE_ACTING_CYLINDER}
      {...props}
      _style={extendStyle(X11490_SINGLE_ACTING_CYLINDER, props)}
    />
  )
}
