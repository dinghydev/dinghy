import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_STORE = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.message_store;fillColor=#c0f5a9',
  },
  _width: 150,
  _height: 90,
}

export function MessageStore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_STORE)} />
}
