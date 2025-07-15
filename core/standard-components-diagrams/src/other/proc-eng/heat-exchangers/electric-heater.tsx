import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELECTRIC_HEATER = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.electric_heater;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 140,
  _height: 100,
}

export function ElectricHeater(props: DiagramNodeProps) {
  return <Shape {...ELECTRIC_HEATER} {...props} />
}
