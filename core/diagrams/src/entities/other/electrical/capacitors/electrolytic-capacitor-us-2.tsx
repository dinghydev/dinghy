import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELECTROLYTIC_CAPACITOR_US_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.capacitor_5;',
  },
  _width: 100,
  _height: 60,
}

export function ElectrolyticCapacitorUs2(props: NodeProps) {
  return (
    <Shape
      {...ELECTROLYTIC_CAPACITOR_US_2}
      {...props}
      _style={extendStyle(ELECTROLYTIC_CAPACITOR_US_2, props)}
    />
  )
}
