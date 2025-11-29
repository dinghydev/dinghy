import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RS_LATCH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.rs_latch;',
  },
  _width: 100,
  _height: 80,
}

export function RsLatch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RS_LATCH)} />
}
