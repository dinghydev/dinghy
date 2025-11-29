import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JOIN_NODE = {
  _style: {
    entity:
      'html=1;points=[];perimeter=orthogonalPerimeter;fillColor=strokeColor;align=left;verticalAlign=top;spacingLeft=10;',
  },
  _width: 5,
  _height: 80,
}

export function JoinNode(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JOIN_NODE)} />
}
