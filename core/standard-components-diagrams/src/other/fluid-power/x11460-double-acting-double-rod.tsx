import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11460_DOUBLE_ACTING_DOUBLE_ROD = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11460;points=[[0.427,1,0],[0.81,1,0]]',
  _width: 195.04,
  _height: 73.56,
}

export function X11460DoubleActingDoubleRod(props: DiagramNodeProps) {
  return <Shape {...X11460_DOUBLE_ACTING_DOUBLE_ROD} {...props} />
}
