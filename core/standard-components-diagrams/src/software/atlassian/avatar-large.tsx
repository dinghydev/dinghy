import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVATAR_LARGE = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#6554C0;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=46;fontStyle=1;html=1;sketch=0;',
  },
  _original_width: 96,
  _original_height: 96,
}

export function AvatarLarge(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVATAR_LARGE}
      {...props}
      _style={extendStyle(AVATAR_LARGE, props)}
    />
  )
}
