import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMAND_MESSAGE_2 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=ellipse;fillColor=#808080;strokeColor=none;',
  },
  _width: 1,
  _height: 30,
}

export function CommandMessage2(props: NodeProps) {
  return (
    <Shape
      {...COMMAND_MESSAGE_2}
      {...props}
      _style={extendStyle(COMMAND_MESSAGE_2, props)}
    />
  )
}
