import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE = {
  _style: {
    entity: 'shape=rect;fillColor=#F7F7F7;strokeColor=none;',
  },
  _width: 164,
  _height: 20,
}

export function Message(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE)} />
}
