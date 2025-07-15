import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMENT_4 = {
  _style:
    'html=1;fillColor=none;strokeColor=none;fontSize=12;align=left;fontColor=#596780;whiteSpace=wrap',
  _width: 3,
  _height: 125,
}

export function Comment4(props: DiagramNodeProps) {
  return <Shape {...COMMENT_4} {...props} />
}
