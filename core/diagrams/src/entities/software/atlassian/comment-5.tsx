import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMENT_5 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=12;align=left;fontColor=#000000;whiteSpace=wrap;verticalAlign=top',
  },
  _width: 5,
  _height: 125,
}

export function Comment5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMMENT_5)} />
}
