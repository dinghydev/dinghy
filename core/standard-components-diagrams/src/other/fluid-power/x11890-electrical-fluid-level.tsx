import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11890_ELECTRICAL_FLUID_LEVEL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11890;points=[[0.225,1,0]]',
  _width: 83.86,
  _height: 65.24,
}

export function X11890ElectricalFluidLevel(props: DiagramNodeProps) {
  return <Shape {...X11890_ELECTRICAL_FLUID_LEVEL} {...props} />
}
