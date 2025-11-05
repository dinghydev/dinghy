import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_CHANNEL = {
  _style: {
    entity:
      'strokeWidth=1;outlineConnect=0;dashed=0;align=center;fontSize=8;shape=mxgraph.eip.messageChannel;html=1;verticalLabelPosition=bottom;verticalAlign=top;',
  },
  _width: 100,
  _height: 20,
}

export function MessageChannel(props: NodeProps) {
  return (
    <Shape
      {...MESSAGE_CHANNEL}
      {...props}
      _style={extendStyle(MESSAGE_CHANNEL, props)}
    />
  )
}
