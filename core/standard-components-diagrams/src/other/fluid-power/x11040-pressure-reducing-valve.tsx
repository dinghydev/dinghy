import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11040_PRESSURE_REDUCING_VALVE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11040;points=[[0.33,1,0],[1,0.6,0]]',
  _width: 56.12,
  _height: 93.2,
}

export function X11040PressureReducingValve(props: DiagramNodeProps) {
  return <Shape {...X11040_PRESSURE_REDUCING_VALVE} {...props} />
}
