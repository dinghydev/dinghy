import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIPLEX_INDUCTION_VOLTAGE_REGULATOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.triplex_induction_volt_reg;',
  _width: 100,
  _height: 100,
}

export function TriplexInductionVoltageRegulator(props: DiagramNodeProps) {
  return <Shape {...TRIPLEX_INDUCTION_VOLTAGE_REGULATOR} {...props} />
}
