import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NUMBERED_LIST_6 = {
  _style: {
    entity:
      'shape=rect;rounded=1;whiteSpace=wrap;html=1;shadow=0;strokeColor=none;fillColor=#5D7F99;arcSize=30;fontSize=14;spacingLeft=42;fontStyle=1;fontColor=#FFFFFF;align=left;',
  },
  _width: 6,
  _height: 320,
}

export function NumberedList6(props: NodeProps) {
  return (
    <Shape
      {...NUMBERED_LIST_6}
      {...props}
      _style={extendStyle(NUMBERED_LIST_6, props)}
    />
  )
}
