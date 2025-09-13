import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JOIN_NODE = {
  _style: {
    entity:
      'shape=rect;html=1;fillColor=strokeColor;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  },
  _width: 200,
  _height: 80,
}

export function JoinNode(props: DiagramNodeProps) {
  return (
    <Shape {...JOIN_NODE} {...props} _style={extendStyle(JOIN_NODE, props)} />
  )
}
