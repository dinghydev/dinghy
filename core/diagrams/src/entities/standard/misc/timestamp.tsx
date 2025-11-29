import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIMESTAMP = {
  _style: {
    entity:
      'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  },
  _width: 0,
  _height: 20,
}

export function Timestamp(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TIMESTAMP)} />
}
