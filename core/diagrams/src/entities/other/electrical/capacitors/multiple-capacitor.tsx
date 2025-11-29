import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTIPLE_CAPACITOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.multiple_capacitor;',
  },
  _width: 100,
  _height: 130,
}

export function MultipleCapacitor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MULTIPLE_CAPACITOR)} />
}
