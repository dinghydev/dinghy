import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMENT = {
  _style:
    'shape=note2;boundedLbl=1;whiteSpace=wrap;html=1;size=25;verticalAlign=top;align=center;',
  _width: 120,
  _height: 60,
}

export function Comment(props: DiagramNodeProps) {
  return <Shape {...COMMENT} {...props} />
}
