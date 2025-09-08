import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EVENT_MESSAGE = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#83BEFF;fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _original_width: 2,
  _original_height: 30,
}

export function EventMessage(props: DiagramNodeProps) {
  return (
    <Shape
      {...EVENT_MESSAGE}
      {...props}
      _style={extendStyle(EVENT_MESSAGE, props)}
    />
  )
}
