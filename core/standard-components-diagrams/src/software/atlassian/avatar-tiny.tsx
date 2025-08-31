import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVATAR_TINY = {
  _style:
    'shape=ellipse;fillColor=#FF5630;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=10;fontStyle=1;html=1;sketch=0;',
  _width: 16,
  _height: 16,
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
