import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11710_QUICK_ACTION_COUPLING = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11710;points=[[0.5,0,0],[0.5,1,0]]',
  _width: 18.98,
  _height: 102.86,
}

export function X11710QuickActionCoupling(props: DiagramNodeProps) {
  return <Shape {...X11710_QUICK_ACTION_COUPLING} {...props} />
}
