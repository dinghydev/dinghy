import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10510_SEQUENCE_VALVE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10510;points=[[0.445,0,0],[0.445,1,0],[0.887,1,0]]',
  _width: 83.56,
  _height: 75.54,
}

export function X10510SequenceValve(props: DiagramNodeProps) {
  return <Shape {...X10510_SEQUENCE_VALVE} {...props} />
}
