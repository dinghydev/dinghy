import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESONATOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.resonator;',
  },
  _width: 100,
  _height: 50,
}

export function Resonator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RESONATOR)} />
}
