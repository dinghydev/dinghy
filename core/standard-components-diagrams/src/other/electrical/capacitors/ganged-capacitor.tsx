import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GANGED_CAPACITOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.ganged_capacitor;',
  },
  _original_width: 100,
  _original_height: 130,
}

export function GangedCapacitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...GANGED_CAPACITOR}
      {...props}
      _style={extendStyle(GANGED_CAPACITOR, props)}
    />
  )
}
