import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_STORE = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.message_store;fillColor=#c0f5a9',
  _width: 150,
  _height: 90,
}

export function MessageStore(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_STORE}
      {...props}
      _style={extendStyle(MESSAGE_STORE, props)}
    />
  )
}
