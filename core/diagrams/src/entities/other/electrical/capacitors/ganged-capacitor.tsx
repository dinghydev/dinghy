import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GANGED_CAPACITOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.ganged_capacitor;',
  },
  _width: 100,
  _height: 130,
}

export function GangedCapacitor(props: NodeProps) {
  return (
    <Shape
      {...GANGED_CAPACITOR}
      {...props}
      _style={extendStyle(GANGED_CAPACITOR, props)}
    />
  )
}
