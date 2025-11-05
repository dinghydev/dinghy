import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUFFER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.buffer2;',
  },
  _width: 100,
  _height: 60,
}

export function Buffer(props: NodeProps) {
  return <Shape {...BUFFER} {...props} _style={extendStyle(BUFFER, props)} />
}
