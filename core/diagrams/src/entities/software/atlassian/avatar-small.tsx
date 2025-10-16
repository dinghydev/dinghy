import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AVATAR_SMALL = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#FFAB00;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=12;fontStyle=1;html=1;sketch=0;',
  },
  _original_width: 24,
  _original_height: 24,
}

export function AvatarSmall(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVATAR_SMALL}
      {...props}
      _style={extendStyle(AVATAR_SMALL, props)}
    />
  )
}
