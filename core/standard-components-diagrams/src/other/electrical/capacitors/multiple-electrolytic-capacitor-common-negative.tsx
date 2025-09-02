import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIPLE_ELECTROLYTIC_CAPACITOR_COMMON_NEGATIVE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.multiple_electrolytic_capacitor_comm_neg;',
  },
  _original_width: 100,
  _original_height: 130,
}

export function MultipleElectrolyticCapacitorCommonNegative(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...MULTIPLE_ELECTROLYTIC_CAPACITOR_COMMON_NEGATIVE}
      {...props}
      _style={extendStyle(
        MULTIPLE_ELECTROLYTIC_CAPACITOR_COMMON_NEGATIVE,
        props,
      )}
    />
  )
}
