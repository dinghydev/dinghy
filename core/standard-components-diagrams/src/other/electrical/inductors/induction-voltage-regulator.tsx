import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDUCTION_VOLTAGE_REGULATOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.induction_voltage_regulator;',
  _width: 160,
  _height: 210,
}

export function InductionVoltageRegulator(props: DiagramNodeProps) {
  return <Shape {...INDUCTION_VOLTAGE_REGULATOR} {...props} />
}
