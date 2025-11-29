import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AVATAR_AWAY = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#FFAB00;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=17;fontStyle=1;html=1;sketch=0;',
  },
  _width: 0,
  _height: 32,
}

export function AvatarAway(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AVATAR_AWAY)} />
}
