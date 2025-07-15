import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JOIN_NODE = {
  _style:
    'shape=rect;html=1;fillColor=strokeColor;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  _width: 200,
  _height: 80,
}

export function JoinNode(props: DiagramNodeProps) {
  return <Shape {...JOIN_NODE} {...props} />
}
