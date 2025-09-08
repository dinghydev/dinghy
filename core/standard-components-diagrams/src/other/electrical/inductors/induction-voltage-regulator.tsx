import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDUCTION_VOLTAGE_REGULATOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.induction_voltage_regulator;',
  },
  _original_width: 160,
  _original_height: 210,
}

export function InductionVoltageRegulator(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUCTION_VOLTAGE_REGULATOR}
      {...props}
      _style={extendStyle(INDUCTION_VOLTAGE_REGULATOR, props)}
    />
  )
}
