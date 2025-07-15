import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11180_TWO_PORT_CARTRIDGE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11180;points=[[0,0.25,0],[0.543,1,0],[0.656,0.748,0],[0.943,0.58,0],[0.257,0.58,0]]',
  _width: 325.1,
  _height: 223.22,
}

export function X11180TwoPortCartridge(props: DiagramNodeProps) {
  return <Shape {...X11180_TWO_PORT_CARTRIDGE} {...props} />
}
