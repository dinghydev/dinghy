import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGE_ENDPOINT = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;verticalLabelPosition=bottom;verticalAlign=top;fillColor=#c0f5a9;html=1;',
  },
  _original_width: 0,
  _original_height: 90,
}

export function MessageEndpoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_ENDPOINT}
      {...props}
      _style={extendStyle(MESSAGE_ENDPOINT, props)}
    />
  )
}
