import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10830_PROPORTIONAL_PRESSURE_RELIEF = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10830;points=[[0.35,0,0],[0.35,1,0],[1,0.5,0],[1,0.625,0],[1,0.75,0]]',
  },
  _original_width: 106.66,
  _original_height: 74.82,
}

export function X10830ProportionalPressureRelief(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10830_PROPORTIONAL_PRESSURE_RELIEF}
      {...props}
      _style={extendStyle(X10830_PROPORTIONAL_PRESSURE_RELIEF, props)}
    />
  )
}
