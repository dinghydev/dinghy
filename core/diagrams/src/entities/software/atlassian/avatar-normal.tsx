import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AVATAR_NORMAL = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#36B37E;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=17;fontStyle=1;html=1;sketch=0;',
  },
  _original_width: 32,
  _original_height: 32,
}

export function AvatarNormal(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AVATAR_NORMAL)} />
}
