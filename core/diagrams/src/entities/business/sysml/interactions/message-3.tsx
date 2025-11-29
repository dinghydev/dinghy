import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_3 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;endSize=12;endFill=1;dashed=1;',
  },
  _width: 6,
  _height: 250,
}

export function Message3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_3)} />
}
