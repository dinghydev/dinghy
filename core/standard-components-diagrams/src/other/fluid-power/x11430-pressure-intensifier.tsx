import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11430_PRESSURE_INTENSIFIER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11430;points=[[0,0.375,0],[1,0.375,0],[0.4,0.99,0],[0.6,1,0]]',
  _width: 93.94,
  _height: 74.72,
}

export function X11430PressureIntensifier(props: DiagramNodeProps) {
  return <Shape {...X11430_PRESSURE_INTENSIFIER} {...props} />
}
