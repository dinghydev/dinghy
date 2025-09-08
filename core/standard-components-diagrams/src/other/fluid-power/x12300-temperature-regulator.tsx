import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12300_TEMPERATURE_REGULATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12300;points=[[0,0.5,0],[1,0.5,0]]',
  },
  _original_width: 99.6,
  _original_height: 52.56,
}

export function X12300TemperatureRegulator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12300_TEMPERATURE_REGULATOR}
      {...props}
      _style={extendStyle(X12300_TEMPERATURE_REGULATOR, props)}
    />
  )
}
