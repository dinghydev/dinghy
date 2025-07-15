import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10540_PRESSURE_REGULATOR = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10540;points=[[0.35,0,0],[0.35,1,0]]',
  _width: 79.18,
  _height: 75.54,
}

export function X10540PressureRegulator(props: DiagramNodeProps) {
  return <Shape {...X10540_PRESSURE_REGULATOR} {...props} />
}
