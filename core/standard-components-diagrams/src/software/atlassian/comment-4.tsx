import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMENT_4 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=12;align=left;fontColor=#596780;whiteSpace=wrap',
  },
  _original_width: 3,
  _original_height: 125,
}

export function Comment4(props: DiagramNodeProps) {
  return (
    <Shape {...COMMENT_4} {...props} _style={extendStyle(COMMENT_4, props)} />
  )
}
