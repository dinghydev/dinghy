import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDUCTION_VOLTAGE_REGULATOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.induction_voltage_regulator;',
  },
  _width: 160,
  _height: 210,
}

export function InductionVoltageRegulator(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, INDUCTION_VOLTAGE_REGULATOR)}
    />
  )
}
