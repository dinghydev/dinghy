import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12300_TEMPERATURE_REGULATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12300;points=[[0,0.5,0],[1,0.5,0]]',
  },
  _width: 99.6,
  _height: 52.56,
}

export function X12300TemperatureRegulator(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X12300_TEMPERATURE_REGULATOR)}
    />
  )
}
