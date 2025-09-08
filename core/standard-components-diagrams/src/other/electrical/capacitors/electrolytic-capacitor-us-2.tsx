import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELECTROLYTIC_CAPACITOR_US_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.capacitor_5;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function ElectrolyticCapacitorUs2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELECTROLYTIC_CAPACITOR_US_2}
      {...props}
      _style={extendStyle(ELECTROLYTIC_CAPACITOR_US_2, props)}
    />
  )
}
