import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAPACITOR_US_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.capacitor_2;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function CapacitorUs2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CAPACITOR_US_2}
      {...props}
      _style={extendStyle(CAPACITOR_US_2, props)}
    />
  )
}
