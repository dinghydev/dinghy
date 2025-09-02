import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVATAR_NORMAL = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#36B37E;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=17;fontStyle=1;html=1;sketch=0;',
  },
  _original_width: 32,
  _original_height: 32,
}

export function AvatarNormal(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVATAR_NORMAL}
      {...props}
      _style={extendStyle(AVATAR_NORMAL, props)}
    />
  )
}
