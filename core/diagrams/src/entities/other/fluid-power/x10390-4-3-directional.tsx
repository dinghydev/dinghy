import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10390_4_3_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10390;points=[[0.457,0,0],[0.457,1,0],[0.545,0,0],[0.545,1,0],[0,1,0],[1,1,0],[0.287,0.25,0],[0.287,0.75,0],[0.373,0.25,0],[0.373,0.75,0],[0.627,0.25,0],[0.627,0.75,0],[0.713,0.25,0],[0.713,0.75,0]]',
  },
  _width: 218.46,
  _height: 75.02,
}

export function X1039043Directional(props: NodeProps) {
  return (
    <Shape
      {...X10390_4_3_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10390_4_3_DIRECTIONAL, props)}
    />
  )
}
