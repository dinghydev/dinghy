import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11550_DOUBLE_ACTING_CYLINDER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11550;points=[[0.04,1,0],[0.705,1,0]]',
  _width: 111.44,
  _height: 56.12,
}

export function X11550DoubleActingCylinder(props: DiagramNodeProps) {
  return <Shape {...X11550_DOUBLE_ACTING_CYLINDER} {...props} />
}
