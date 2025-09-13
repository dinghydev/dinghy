import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGE_FILTER = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.message_filter;',
  },
  _width: 150,
  _height: 90,
}

export function MessageFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_FILTER}
      {...props}
      _style={extendStyle(MESSAGE_FILTER, props)}
    />
  )
}
