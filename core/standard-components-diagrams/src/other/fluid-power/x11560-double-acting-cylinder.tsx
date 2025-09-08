import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11560_DOUBLE_ACTING_CYLINDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11560;points=[[0.34,1,0],[0.66,1,0]]',
  },
  _original_width: 232.08,
  _original_height: 83.92,
}

export function X11560DoubleActingCylinder(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11560_DOUBLE_ACTING_CYLINDER}
      {...props}
      _style={extendStyle(X11560_DOUBLE_ACTING_CYLINDER, props)}
    />
  )
}
