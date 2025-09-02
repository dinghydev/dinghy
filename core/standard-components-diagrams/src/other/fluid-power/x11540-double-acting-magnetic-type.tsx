import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11540_DOUBLE_ACTING_MAGNETIC_TYPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11540;points=[[0.04,1,0],[0.705,1,0]]',
  },
  _original_width: 111.46,
  _original_height: 84.14,
}

export function X11540DoubleActingMagneticType(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11540_DOUBLE_ACTING_MAGNETIC_TYPE}
      {...props}
      _style={extendStyle(X11540_DOUBLE_ACTING_MAGNETIC_TYPE, props)}
    />
  )
}
