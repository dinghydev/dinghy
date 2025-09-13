import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELECTROLYTIC_CAPACITOR_US = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.capacitor_3;',
  },
  _width: 100,
  _height: 60,
}

export function ElectrolyticCapacitorUs(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELECTROLYTIC_CAPACITOR_US}
      {...props}
      _style={extendStyle(ELECTROLYTIC_CAPACITOR_US, props)}
    />
  )
}
