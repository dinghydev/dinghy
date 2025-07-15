import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10550_DIRECTLY_CONTROLLED = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10550;points=[[0.44,0,0],[0.44,1,0],[0.885,1,0]]',
  _width: 83.56,
  _height: 75.54,
}

export function X10550DirectlyControlled(props: DiagramNodeProps) {
  return <Shape {...X10550_DIRECTLY_CONTROLLED} {...props} />
}
