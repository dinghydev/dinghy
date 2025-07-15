import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10590_ACCUMULATOR_CHARGING_VALVE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10590;points=[[0.117,0,0],[0.117,1,0],[0.94,0.545,0]]',
  _width: 158.02,
  _height: 205.46,
}

export function X10590AccumulatorChargingValve(props: DiagramNodeProps) {
  return <Shape {...X10590_ACCUMULATOR_CHARGING_VALVE} {...props} />
}
