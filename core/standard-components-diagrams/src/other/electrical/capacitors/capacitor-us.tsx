import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAPACITOR_US = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.capacitor_1;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function CapacitorUs(props: DiagramNodeProps) {
  return (
    <Shape
      {...CAPACITOR_US}
      {...props}
      _style={extendStyle(CAPACITOR_US, props)}
    />
  )
}
