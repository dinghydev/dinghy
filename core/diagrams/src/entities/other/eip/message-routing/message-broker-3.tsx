import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_BROKER_3 = {
  _style: {
    entity: 'edgeStyle=none;endArrow=none;dashed=0;html=1;strokeWidth=2;',
  },
  _width: 7,
  _height: 90,
}

export function MessageBroker3(props: NodeProps) {
  return (
    <Shape
      {...MESSAGE_BROKER_3}
      {...props}
      _style={extendStyle(MESSAGE_BROKER_3, props)}
    />
  )
}
