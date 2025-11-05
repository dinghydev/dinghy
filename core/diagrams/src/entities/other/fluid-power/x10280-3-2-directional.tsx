import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10280_3_2_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10280;points=[[0.59,0,0],[0.59,1,0],[0.74,1,0],[0.44,0.75,0],[0.295,0.25,0],[0.295,0.75,0]]',
  },
  _width: 125.6,
  _height: 74.48,
}

export function X1028032Directional(props: NodeProps) {
  return (
    <Shape
      {...X10280_3_2_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10280_3_2_DIRECTIONAL, props)}
    />
  )
}
