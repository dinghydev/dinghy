import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUBJECT = {
  _style: {
    entity:
      'shape=rect;html=1;verticalAlign=top;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 120,
  _height: 60,
}

export function Subject(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUBJECT)} />
}
