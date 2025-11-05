import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10840_PROPORTIONAL_PRESSURE_RELIEF = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10840;points=[[0.335,0,0],[0.335,1,0]]',
  },
  _width: 111.48,
  _height: 74.82,
}

export function X10840ProportionalPressureRelief(props: NodeProps) {
  return (
    <Shape
      {...X10840_PROPORTIONAL_PRESSURE_RELIEF}
      {...props}
      _style={extendStyle(X10840_PROPORTIONAL_PRESSURE_RELIEF, props)}
    />
  )
}
