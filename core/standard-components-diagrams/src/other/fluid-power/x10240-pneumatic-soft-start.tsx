import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10240_PNEUMATIC_SOFT_START = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10240;points=[[0.725,0,0],[0.725,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0],[0.28,0.5,0],[0.28,0.75,0],[0.485,0.25,0],[0.485,0.75,0],[0.09,0.5,0],[0.09,0.75,0]]',
  _width: 153.32,
  _height: 74.66,
}

export function X10240PneumaticSoftStart(props: DiagramNodeProps) {
  return <Shape {...X10240_PNEUMATIC_SOFT_START} {...props} />
}
