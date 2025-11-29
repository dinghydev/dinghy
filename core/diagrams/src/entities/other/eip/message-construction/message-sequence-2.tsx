import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_SEQUENCE_2 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#80FF6C;strokeColor=#000000;fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _width: 2,
  _height: 24,
}

export function MessageSequence2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_SEQUENCE_2)} />
}
