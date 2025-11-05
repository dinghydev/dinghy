import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EVENT_MESSAGE = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#83BEFF;fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _width: 2,
  _height: 30,
}

export function EventMessage(props: NodeProps) {
  return (
    <Shape
      {...EVENT_MESSAGE}
      {...props}
      _style={extendStyle(EVENT_MESSAGE, props)}
    />
  )
}
