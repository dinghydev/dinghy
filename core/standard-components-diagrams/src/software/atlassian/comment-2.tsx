import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMMENT_2 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=12;align=left;fontColor=#000000;whiteSpace=wrap',
  },
  _original_width: 1,
  _original_height: 125,
}

export function Comment2(props: DiagramNodeProps) {
  return (
    <Shape {...COMMENT_2} {...props} _style={extendStyle(COMMENT_2, props)} />
  )
}
