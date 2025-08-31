import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_3 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#80FF6C;strokeColor=#000000;fontStyle=1;html=1;whiteSpace=wrap;',
  },
  _width: 3,
  _height: 48,
}

export function Message3(props: DiagramNodeProps) {
  return (
    <Shape {...MESSAGE_3} {...props} _style={extendStyle(MESSAGE_3, props)} />
  )
}
