import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMAND_MESSAGE_3 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#FF8080;fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _width: 2,
  _height: 30,
}

export function CommandMessage3(props: NodeProps) {
  return (
    <Shape
      {...COMMAND_MESSAGE_3}
      {...props}
      _style={extendStyle(COMMAND_MESSAGE_3, props)}
    />
  )
}
