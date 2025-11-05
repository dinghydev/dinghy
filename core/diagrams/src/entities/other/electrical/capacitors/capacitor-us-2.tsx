import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAPACITOR_US_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.capacitor_2;',
  },
  _width: 100,
  _height: 60,
}

export function CapacitorUs2(props: NodeProps) {
  return (
    <Shape
      {...CAPACITOR_US_2}
      {...props}
      _style={extendStyle(CAPACITOR_US_2, props)}
    />
  )
}
