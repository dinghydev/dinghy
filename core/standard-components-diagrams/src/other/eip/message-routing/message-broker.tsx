import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGE_BROKER = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#fffbc0;strokeColor=#000000;',
  },
  _original_width: 120,
  _original_height: 90,
}

export function MessageBroker(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_BROKER}
      {...props}
      _style={extendStyle(MESSAGE_BROKER, props)}
    />
  )
}
