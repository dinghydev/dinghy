import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMENT_3 = {
  _style: {
    entity:
      'rounded=1;arcSize=5;fillColor=#F2F3F5;strokeColor=none;fontColor=#596780;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=10;fontStyle=1;html=1',
  },
  _original_width: 2,
  _original_height: 125,
}

export function Comment3(props: DiagramNodeProps) {
  return (
    <Shape {...COMMENT_3} {...props} _style={extendStyle(COMMENT_3, props)} />
  )
}
