import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_BUS = {
  _style: {
    entity:
      'strokeWidth=2;strokeColor=#000000;dashed=0;align=center;html=1;fontSize=8;shape=mxgraph.eip.messageChannel;',
  },
  _width: 120,
  _height: 140,
}

export function MessageBus(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_BUS)} />
}
