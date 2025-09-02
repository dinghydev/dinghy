import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10850_PROPORTIONAL_PRESSURE_RELIEF = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10850;points=[[0.277,0,0],[0.277,1,0]]',
  },
  _original_width: 134.72,
  _original_height: 74.82,
}

export function X10850ProportionalPressureRelief(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10850_PROPORTIONAL_PRESSURE_RELIEF}
      {...props}
      _style={extendStyle(X10850_PROPORTIONAL_PRESSURE_RELIEF, props)}
    />
  )
}
