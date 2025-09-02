import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_SEQUENCE_2 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#80FF6C;strokeColor=#000000;fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _original_width: 2,
  _original_height: 24,
}

export function MessageSequence2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_SEQUENCE_2}
      {...props}
      _style={extendStyle(MESSAGE_SEQUENCE_2, props)}
    />
  )
}
