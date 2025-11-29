import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_ENDPOINT_3 = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#c0f5a9;strokeColor=#000000;html=1;',
  },
  _width: 1,
  _height: 90,
}

export function MessageEndpoint3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_ENDPOINT_3)} />
}
