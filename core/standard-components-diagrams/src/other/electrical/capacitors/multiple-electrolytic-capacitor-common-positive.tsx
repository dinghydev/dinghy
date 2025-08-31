import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIPLE_ELECTROLYTIC_CAPACITOR_COMMON_POSITIVE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.multiple_electrolytic_capacitor_comm_pos;',
  },
  _width: 100,
  _height: 130,
}

export function MultipleElectrolyticCapacitorCommonPositive(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...MULTIPLE_ELECTROLYTIC_CAPACITOR_COMMON_POSITIVE}
      {...props}
      _style={extendStyle(
        MULTIPLE_ELECTROLYTIC_CAPACITOR_COMMON_POSITIVE,
        props,
      )}
    />
  )
}
