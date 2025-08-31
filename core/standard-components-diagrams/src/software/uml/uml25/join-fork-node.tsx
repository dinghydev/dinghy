import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JOIN_FORK_NODE = {
  _style: {
    entity:
      'html=1;points=[];perimeter=orthogonalPerimeter;fillColor=strokeColor;',
  },
  _width: 5,
  _height: 80,
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
