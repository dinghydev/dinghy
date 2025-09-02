import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_BROKER_2 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#c0f5a9;strokeColor=#000000;',
  },
  _original_width: 6,
  _original_height: 90,
}

export function MessageBroker2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_BROKER_2}
      {...props}
      _style={extendStyle(MESSAGE_BROKER_2, props)}
    />
  )
}
