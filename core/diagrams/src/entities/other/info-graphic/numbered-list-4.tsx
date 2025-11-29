import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NUMBERED_LIST_4 = {
  _style: {
    entity:
      'shape=rect;rounded=1;whiteSpace=wrap;html=1;shadow=0;strokeColor=none;fillColor=#F08E81;arcSize=30;fontSize=14;spacingLeft=42;fontStyle=1;fontColor=#FFFFFF;align=left;',
  },
  _width: 4,
  _height: 320,
}

export function NumberedList4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NUMBERED_LIST_4)} />
}
