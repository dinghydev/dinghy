import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11260_FIXED_DISPLACEMENT = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11260;points=[[0.57,0,0],[0.57,1,0]]',
  _width: 96.84,
  _height: 93.94,
}

export function X11260FixedDisplacement(props: DiagramNodeProps) {
  return <Shape {...X11260_FIXED_DISPLACEMENT} {...props} />
}
