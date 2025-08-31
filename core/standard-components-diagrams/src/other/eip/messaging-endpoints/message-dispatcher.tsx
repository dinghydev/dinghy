import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_DISPATCHER = {
  _style: {
    entity:
      'fillColor=#c0f5a9;dashed=0;outlineConnect=0;strokeWidth=2;html=1;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.message_dispatcher;',
  },
  _width: 150,
  _height: 90,
}

export function MessageDispatcher(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_DISPATCHER}
      {...props}
      _style={extendStyle(MESSAGE_DISPATCHER, props)}
    />
  )
}
