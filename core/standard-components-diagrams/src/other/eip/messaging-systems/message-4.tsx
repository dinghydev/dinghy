import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_4 = {
  _style:
    'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#ff9900;strokeColor=#000000;fontStyle=1;whiteSpace=wrap;html=1;',
  _width: 4,
  _height: 48,
}

export function Message4(props: DiagramNodeProps) {
  return (
    <Shape {...MESSAGE_4} {...props} _style={extendStyle(MESSAGE_4, props)} />
  )
}
