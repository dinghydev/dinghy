import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMENT_5 = {
  _style:
    'html=1;fillColor=none;strokeColor=none;fontSize=12;align=left;fontColor=#000000;whiteSpace=wrap;verticalAlign=top',
  _width: 5,
  _height: 125,
}

export function Comment5(props: DiagramNodeProps) {
  return (
    <Shape {...COMMENT_5} {...props} _style={extendStyle(COMMENT_5, props)} />
  )
}
