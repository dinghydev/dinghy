import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_CHANNEL = {
  _style:
    'strokeWidth=1;outlineConnect=0;dashed=0;align=center;fontSize=8;shape=mxgraph.eip.messageChannel;html=1;verticalLabelPosition=bottom;verticalAlign=top;',
  _width: 100,
  _height: 20,
}

export function MessageChannel(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_CHANNEL}
      {...props}
      _style={extendStyle(MESSAGE_CHANNEL, props)}
    />
  )
}
