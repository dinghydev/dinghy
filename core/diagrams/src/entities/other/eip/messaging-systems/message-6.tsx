import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_6 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#ff9900;strokeColor=#000000;fontStyle=1;html=1;whiteSpace=wrap;',
  },
  _width: 2,
  _height: 48,
}

export function Message6(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_6)} />
}
