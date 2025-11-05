import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10440_5_2_PNEUMATIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10440;points=[[0.62,0,0],[0.62,1,0],[0.81,0,0],[0.81,1,0],[0.715,1,0],[0.337,0.25,0],[0.335,0.75,0],[0.525,0.25,0],[0.525,0.75,0],[0.43,0.75,0],[0.145,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0],[1,0.5,0],[1,0.625,0],[1,0.75,0]]',
  },
  _width: 194.94,
  _height: 74.94,
}

export function X1044052Pneumatic(props: NodeProps) {
  return (
    <Shape
      {...X10440_5_2_PNEUMATIC}
      {...props}
      _style={extendStyle(X10440_5_2_PNEUMATIC, props)}
    />
  )
}
