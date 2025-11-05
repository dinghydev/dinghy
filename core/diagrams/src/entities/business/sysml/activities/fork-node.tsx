import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FORK_NODE = {
  _style: {
    entity:
      'shape=rect;html=1;fillColor=strokeColor;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _width: 200,
  _height: 80,
}

export function ForkNode(props: NodeProps) {
  return (
    <Shape {...FORK_NODE} {...props} _style={extendStyle(FORK_NODE, props)} />
  )
}
