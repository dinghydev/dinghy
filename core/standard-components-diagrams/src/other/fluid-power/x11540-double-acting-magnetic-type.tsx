import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11540_DOUBLE_ACTING_MAGNETIC_TYPE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11540;points=[[0.04,1,0],[0.705,1,0]]',
  _width: 111.46,
  _height: 84.14,
}

export function X11540DoubleActingMagneticType(props: DiagramNodeProps) {
  return <Shape {...X11540_DOUBLE_ACTING_MAGNETIC_TYPE} {...props} />
}
