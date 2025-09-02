import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIPLEX_INDUCTION_VOLTAGE_REGULATOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.triplex_induction_volt_reg;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function TriplexInductionVoltageRegulator(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIPLEX_INDUCTION_VOLTAGE_REGULATOR}
      {...props}
      _style={extendStyle(TRIPLEX_INDUCTION_VOLTAGE_REGULATOR, props)}
    />
  )
}
