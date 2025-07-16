import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11000_ACTIVE_CONTROL_DIRECTIONAL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11000;points=[[0.37,1,0],[1,0.39,0],[0.878,0.653,0]]',
  _width: 74.36,
  _height: 107.38,
}

export function X11000ActiveControlDirectional(props: DiagramNodeProps) {
  return <Shape {...X11000_ACTIVE_CONTROL_DIRECTIONAL} {...props} />
}
