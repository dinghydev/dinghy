import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AVATAR_AVAILABLE = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#6554C0;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=17;fontStyle=1;html=1;sketch=0;',
  },
  _width: 0,
  _height: 32,
}

export function AvatarAvailable(props: NodeProps) {
  return (
    <Shape
      {...AVATAR_AVAILABLE}
      {...props}
      _style={extendStyle(AVATAR_AVAILABLE, props)}
    />
  )
}
