import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIPLE_ELECTROLYTIC_CAPACITOR_COMMON_NEGATIVE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.multiple_electrolytic_capacitor_comm_neg;',
  _width: 100,
  _height: 130,
}

export function MultipleElectrolyticCapacitorCommonNegative(
  props: DiagramNodeProps,
) {
  return (
    <Shape {...MULTIPLE_ELECTROLYTIC_CAPACITOR_COMMON_NEGATIVE} {...props} />
  )
}
