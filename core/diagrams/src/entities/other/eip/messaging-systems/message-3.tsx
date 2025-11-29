import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_3 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#80FF6C;strokeColor=#000000;fontStyle=1;html=1;whiteSpace=wrap;',
  },
  _width: 3,
  _height: 48,
}

export function Message3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_3)} />
}
