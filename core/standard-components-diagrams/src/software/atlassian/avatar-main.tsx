import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVATAR_MAIN = {
  _style:
    'shape=ellipse;fillColor=#0065FF;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=25;fontStyle=1;html=1;sketch=0;',
  _width: 48,
  _height: 48,
}

export function AvatarMain(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVATAR_MAIN}
      {...props}
      _style={extendStyle(AVATAR_MAIN, props)}
    />
  )
}
