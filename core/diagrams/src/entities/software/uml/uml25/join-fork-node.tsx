import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JOIN_FORK_NODE = {
  _style: {
    entity:
      'html=1;points=[];perimeter=orthogonalPerimeter;fillColor=strokeColor;',
  },
  _width: 5,
  _height: 80,
}

export function JoinForkNode(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JOIN_FORK_NODE)} />
}
