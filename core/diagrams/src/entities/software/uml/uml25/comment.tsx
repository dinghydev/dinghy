import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMENT = {
  _style: {
    entity:
      'shape=note2;boundedLbl=1;whiteSpace=wrap;html=1;size=25;verticalAlign=top;align=center;',
  },
  _width: 120,
  _height: 60,
}

export function Comment(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMMENT)} />
}
