import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X12300_TEMPERATURE_REGULATOR = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12300;points=[[0,0.5,0],[1,0.5,0]]',
  _width: 99.6,
  _height: 52.56,
}

export function X12300TemperatureRegulator(props: DiagramNodeProps) {
  return <Shape {...X12300_TEMPERATURE_REGULATOR} {...props} />
}
