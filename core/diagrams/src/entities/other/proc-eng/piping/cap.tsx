import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.cap;',
  },
  _width: 10,
  _height: 20,
}

export function Cap(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CAP)} />
}
