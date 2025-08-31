import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_5 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#80FF6C;fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _width: 2,
  _height: 30,
}

export function Message5(props: DiagramNodeProps) {
  return (
    <Shape {...MESSAGE_5} {...props} _style={extendStyle(MESSAGE_5, props)} />
  )
}
