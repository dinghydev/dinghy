import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EQUIPOTENTIAL_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.protective_earth;',
  },
  _width: 25,
  _height: 20,
}

export function Equipotential2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EQUIPOTENTIAL_2)} />
}
