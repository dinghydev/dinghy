import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_2 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=ellipse;fillColor=#808080;strokeColor=none;',
  },
  _width: 2,
  _height: 48,
}

export function Message2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_2)} />
}
