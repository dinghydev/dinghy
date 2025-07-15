import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HIGH_VOLTAGE_2 = {
  _style:
    'shape=mxgraph.signs.safety.high_voltage_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 40,
  _height: 99,
}

export function HighVoltage2(props: DiagramNodeProps) {
  return <Shape {...HIGH_VOLTAGE_2} {...props} />
}
