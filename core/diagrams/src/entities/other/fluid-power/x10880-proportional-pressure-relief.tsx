import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10880_PROPORTIONAL_PRESSURE_RELIEF = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10880;points=[[0.267,0.15,0],[0.267,1,0],[0.6,1,0]]',
  },
  _width: 139.14,
  _height: 88.42,
}

export function X10880ProportionalPressureRelief(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X10880_PROPORTIONAL_PRESSURE_RELIEF)}
    />
  )
}
