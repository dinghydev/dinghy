import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JOIN_NODE = {
  _style:
    'html=1;points=[];perimeter=orthogonalPerimeter;fillColor=strokeColor;align=left;verticalAlign=top;spacingLeft=10;',
  _width: 5,
  _height: 80,
}

export function JoinNode(props: DiagramNodeProps) {
  return <Shape {...JOIN_NODE} {...props} />
}
