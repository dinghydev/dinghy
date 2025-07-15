import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10441_5_2_PNEUMATIC = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10441;points=[[0.62,0,0],[0.62,1,0],[0.81,0,0],[0.81,1,0],[0.715,1,0],[0.337,0.25,0],[0.335,0.75,0],[0.525,0.25,0],[0.525,0.75,0],[0.43,0.75,0],[0.145,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0],[1,0.5,0],[1,0.625,0],[1,0.75,0]]',
  _width: 194.94,
  _height: 74.94,
}

export function X1044152Pneumatic(props: DiagramNodeProps) {
  return <Shape {...X10441_5_2_PNEUMATIC} {...props} />
}
