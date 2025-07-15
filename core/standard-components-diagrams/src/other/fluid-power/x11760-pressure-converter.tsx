import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11760_PRESSURE_CONVERTER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11760;points=[[0.4,0,0],[0,0.7,0]]',
  _width: 46.82,
  _height: 47.12,
}

export function X11760PressureConverter(props: DiagramNodeProps) {
  return <Shape {...X11760_PRESSURE_CONVERTER} {...props} />
}
