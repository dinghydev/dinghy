import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11470_DOUBLE_ACTING_DIAPHRAGM = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11470;points=[[0.28,1,0],[0.76,1,0]]',
  _width: 155.38,
  _height: 60.64,
}

export function X11470DoubleActingDiaphragm(props: DiagramNodeProps) {
  return <Shape {...X11470_DOUBLE_ACTING_DIAPHRAGM} {...props} />
}
