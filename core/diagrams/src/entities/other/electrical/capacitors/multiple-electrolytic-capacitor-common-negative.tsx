import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTIPLE_ELECTROLYTIC_CAPACITOR_COMMON_NEGATIVE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.multiple_electrolytic_capacitor_comm_neg;',
  },
  _width: 100,
  _height: 130,
}

export function MultipleElectrolyticCapacitorCommonNegative(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        MULTIPLE_ELECTROLYTIC_CAPACITOR_COMMON_NEGATIVE,
      )}
    />
  )
}
