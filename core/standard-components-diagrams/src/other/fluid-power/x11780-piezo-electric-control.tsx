import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11780_PIEZO_ELECTRIC_CONTROL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11780;points=[[0,0,0],[0.5,0,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,1,0],[0,1,0],[0,0.5,0]]',
  _width: 27.76,
  _height: 18.56,
}

export function X11780PiezoElectricControl(props: DiagramNodeProps) {
  return <Shape {...X11780_PIEZO_ELECTRIC_CONTROL} {...props} />
}
