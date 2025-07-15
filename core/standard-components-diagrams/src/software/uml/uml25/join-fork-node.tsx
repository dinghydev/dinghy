import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JOIN_FORK_NODE = {
  _style:
    'html=1;points=[];perimeter=orthogonalPerimeter;fillColor=strokeColor;',
  _width: 5,
  _height: 80,
}

export function JoinForkNode(props: DiagramNodeProps) {
  return <Shape {...JOIN_FORK_NODE} {...props} />
}
