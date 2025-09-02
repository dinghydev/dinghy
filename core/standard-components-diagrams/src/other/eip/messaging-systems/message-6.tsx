import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_6 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#ff9900;strokeColor=#000000;fontStyle=1;html=1;whiteSpace=wrap;',
  },
  _original_width: 2,
  _original_height: 48,
}

export function Message6(props: DiagramNodeProps) {
  return (
    <Shape {...MESSAGE_6} {...props} _style={extendStyle(MESSAGE_6, props)} />
  )
}
