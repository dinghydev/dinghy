import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10860_PROPORTIONAL_PRESSURE_RELIEF = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10860;points=[[0.23,0,0],[0.23,1,0],[0.515,1,0]]',
  },
  _width: 162.34,
  _height: 75,
}

export function X10860ProportionalPressureRelief(props: NodeProps) {
  return (
    <Shape
      {...X10860_PROPORTIONAL_PRESSURE_RELIEF}
      {...props}
      _style={extendStyle(X10860_PROPORTIONAL_PRESSURE_RELIEF, props)}
    />
  )
}
