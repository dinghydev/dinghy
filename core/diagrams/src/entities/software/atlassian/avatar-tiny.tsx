import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AVATAR_TINY = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#FF5630;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=10;fontStyle=1;html=1;sketch=0;',
  },
  _original_width: 16,
  _original_height: 16,
}

export function AvatarTiny(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVATAR_TINY}
      {...props}
      _style={extendStyle(AVATAR_TINY, props)}
    />
  )
}
