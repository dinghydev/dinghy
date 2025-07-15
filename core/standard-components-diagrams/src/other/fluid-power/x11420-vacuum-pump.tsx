import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11420_VACUUM_PUMP = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11420;points=[[0.665,0,0],[0.665,1,0]]',
  _width: 83.5,
  _height: 92.9,
}

export function X11420VacuumPump(props: DiagramNodeProps) {
  return <Shape {...X11420_VACUUM_PUMP} {...props} />
}
