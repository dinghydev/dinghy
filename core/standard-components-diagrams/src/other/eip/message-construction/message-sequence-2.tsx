import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_SEQUENCE_2 = {
  _style:
    'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#80FF6C;strokeColor=#000000;fontStyle=1;whiteSpace=wrap;html=1;',
  _width: 2,
  _height: 24,
}

export function MessageSequence2(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_SEQUENCE_2} {...props} />
}
