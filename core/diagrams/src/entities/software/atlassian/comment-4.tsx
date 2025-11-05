import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMENT_4 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=12;align=left;fontColor=#596780;whiteSpace=wrap',
  },
  _width: 3,
  _height: 125,
}

export function Comment4(props: NodeProps) {
  return (
    <Shape {...COMMENT_4} {...props} _style={extendStyle(COMMENT_4, props)} />
  )
}
