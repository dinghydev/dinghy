import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_1_PHASE_INDUCTION_VOLTAGE_REGULATOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.1_phase_induction_volt_reg;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Component1PhaseInductionVoltageRegulator(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_1_PHASE_INDUCTION_VOLTAGE_REGULATOR}
      {...props}
      _style={extendStyle(COMPONENT_1_PHASE_INDUCTION_VOLTAGE_REGULATOR, props)}
    />
  )
}
