import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JOIN_NODE = {
  _style: {
    entity:
      'html=1;points=[];perimeter=orthogonalPerimeter;fillColor=strokeColor;align=left;verticalAlign=top;spacingLeft=10;',
  },
  _original_width: 5,
  _original_height: 80,
}

export function JoinNode(props: DiagramNodeProps) {
  return (
    <Shape {...JOIN_NODE} {...props} _style={extendStyle(JOIN_NODE, props)} />
  )
}
