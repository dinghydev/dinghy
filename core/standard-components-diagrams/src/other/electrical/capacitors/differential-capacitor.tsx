import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIFFERENTIAL_CAPACITOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.differential_capacitor;',
  },
  _original_width: 100,
  _original_height: 80,
}

export function DifferentialCapacitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIFFERENTIAL_CAPACITOR}
      {...props}
      _style={extendStyle(DIFFERENTIAL_CAPACITOR, props)}
    />
  )
}
