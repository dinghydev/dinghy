import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMAND_MESSAGE_3 = {
  _style:
    'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#FF8080;fontStyle=1;whiteSpace=wrap;html=1;',
  _width: 2,
  _height: 30,
}

export function CommandMessage3(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMAND_MESSAGE_3}
      {...props}
      _style={extendStyle(COMMAND_MESSAGE_3, props)}
    />
  )
}
