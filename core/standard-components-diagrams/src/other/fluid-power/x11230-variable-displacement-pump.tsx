import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11230_VARIABLE_DISPLACEMENT_PUMP = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11230;points=[[0.5,0,0],[0.5,1,0]]',
  _width: 84.54,
  _height: 93.94,
}

export function X11230VariableDisplacementPump(props: DiagramNodeProps) {
  return <Shape {...X11230_VARIABLE_DISPLACEMENT_PUMP} {...props} />
}
