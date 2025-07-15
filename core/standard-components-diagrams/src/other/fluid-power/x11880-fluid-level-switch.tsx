import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11880_FLUID_LEVEL_SWITCH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11880;points=[[0.28,1,0]]',
  _width: 65.32,
  _height: 56.18,
}

export function X11880FluidLevelSwitch(props: DiagramNodeProps) {
  return <Shape {...X11880_FLUID_LEVEL_SWITCH} {...props} />
}
