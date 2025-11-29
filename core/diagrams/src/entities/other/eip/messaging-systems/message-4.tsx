import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_4 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#ff9900;strokeColor=#000000;fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _width: 4,
  _height: 48,
}

export function Message4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_4)} />
}
