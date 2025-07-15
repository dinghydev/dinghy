import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11440_SINGLE_ACTING_SINGLE_ROD = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11440;points=[[0.04,1,0],[0.707,1,0]]',
  _width: 111.42,
  _height: 56.04,
}

export function X11440SingleActingSingleRod(props: DiagramNodeProps) {
  return <Shape {...X11440_SINGLE_ACTING_SINGLE_ROD} {...props} />
}
