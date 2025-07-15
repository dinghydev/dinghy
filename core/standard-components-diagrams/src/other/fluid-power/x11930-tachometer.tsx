import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11930_TACHOMETER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11930;points=[[0,0.375,0],[0,0.625,0]]',
  _width: 56.28,
  _height: 37.42,
}

export function X11930Tachometer(props: DiagramNodeProps) {
  return <Shape {...X11930_TACHOMETER} {...props} />
}
