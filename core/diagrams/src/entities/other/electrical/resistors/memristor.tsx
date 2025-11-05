import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEMRISTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.memristor_1;',
  },
  _width: 100,
  _height: 20,
}

export function Memristor(props: NodeProps) {
  return (
    <Shape {...MEMRISTOR} {...props} _style={extendStyle(MEMRISTOR, props)} />
  )
}
