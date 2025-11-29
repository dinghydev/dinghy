import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMENT_2 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=12;align=left;fontColor=#000000;whiteSpace=wrap',
  },
  _width: 1,
  _height: 125,
}

export function Comment2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMMENT_2)} />
}
