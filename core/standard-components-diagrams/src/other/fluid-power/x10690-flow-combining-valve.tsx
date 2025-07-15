import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10690_FLOW_COMBINING_VALVE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10690;points=[[0.5,0,0],[0.3,1,0],[0.7,1,0]]',
  _width: 92.78,
  _height: 112.16,
}

export function X10690FlowCombiningValve(props: DiagramNodeProps) {
  return <Shape {...X10690_FLOW_COMBINING_VALVE} {...props} />
}
