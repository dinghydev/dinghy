import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMENT_2 = {
  _style:
    'html=1;fillColor=none;strokeColor=none;fontSize=12;align=left;fontColor=#000000;whiteSpace=wrap',
  _width: 1,
  _height: 125,
}

export function Comment2(props: DiagramNodeProps) {
  return (
    <Shape {...COMMENT_2} {...props} _style={extendStyle(COMMENT_2, props)} />
  )
}
