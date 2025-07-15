import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMENT = {
  _style:
    'shape=note;size=15;align=left;spacingLeft=10;html=1;whiteSpace=wrap;',
  _width: 180,
  _height: 80,
}

export function Comment(props: DiagramNodeProps) {
  return <Shape {...COMMENT} {...props} />
}
