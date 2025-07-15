import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HIGH_VOLTAGE_1 = {
  _style:
    'shape=mxgraph.signs.safety.high_voltage_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 49,
  _height: 98,
}

export function HighVoltage1(props: DiagramNodeProps) {
  return <Shape {...HIGH_VOLTAGE_1} {...props} />
}
