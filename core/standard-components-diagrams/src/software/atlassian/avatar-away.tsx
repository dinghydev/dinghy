import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVATAR_AWAY = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#FFAB00;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=17;fontStyle=1;html=1;sketch=0;',
  },
  _original_width: 0,
  _original_height: 32,
}

export function AvatarAway(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVATAR_AWAY}
      {...props}
      _style={extendStyle(AVATAR_AWAY, props)}
    />
  )
}
