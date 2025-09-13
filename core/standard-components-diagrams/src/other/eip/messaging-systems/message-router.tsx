import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGE_ROUTER = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;shape=mxgraph.eip.content_based_router;verticalLabelPosition=bottom;verticalAlign=top;fillColor=#c0f5a9;',
  },
  _width: 150,
  _height: 90,
}

export function MessageRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_ROUTER}
      {...props}
      _style={extendStyle(MESSAGE_ROUTER, props)}
    />
  )
}
