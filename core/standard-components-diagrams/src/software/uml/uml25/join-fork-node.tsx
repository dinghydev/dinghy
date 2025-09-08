import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JOIN_FORK_NODE = {
  _style: {
    entity:
      'html=1;points=[];perimeter=orthogonalPerimeter;fillColor=strokeColor;',
  },
  _original_width: 5,
  _original_height: 80,
}

export function JoinForkNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...JOIN_FORK_NODE}
      {...props}
      _style={extendStyle(JOIN_FORK_NODE, props)}
    />
  )
}
