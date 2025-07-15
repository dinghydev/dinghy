import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11590_PRESSURE_INTENSIFIER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11590;points=[[0.053,1,0],[0.94,1,0]]',
  _width: 83.48,
  _height: 72.06,
}

export function X11590PressureIntensifier(props: DiagramNodeProps) {
  return <Shape {...X11590_PRESSURE_INTENSIFIER} {...props} />
}
