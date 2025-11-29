import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_2 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=block;verticalAlign=bottom;endSize=12;endFill=1;',
  },
  _width: 5,
  _height: 250,
}

export function Message2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_2)} />
}
