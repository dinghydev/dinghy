import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_1_PHASE_INDUCTION_VOLTAGE_REGULATOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.1_phase_induction_volt_reg;',
  _width: 100,
  _height: 100,
}

export function Component1PhaseInductionVoltageRegulator(
  props: DiagramNodeProps,
) {
  return <Shape {...COMPONENT_1_PHASE_INDUCTION_VOLTAGE_REGULATOR} {...props} />
}
