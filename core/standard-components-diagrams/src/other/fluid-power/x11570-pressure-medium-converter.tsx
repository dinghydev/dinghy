import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11570_PRESSURE_MEDIUM_CONVERTER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11570;points=[[0.027,1,0],[0.477,1,0]]',
  _width: 164.9,
  _height: 104.24,
}

export function X11570PressureMediumConverter(props: DiagramNodeProps) {
  return <Shape {...X11570_PRESSURE_MEDIUM_CONVERTER} {...props} />
}
