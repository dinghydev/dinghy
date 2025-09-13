import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AVATAR_DO_NOT_DISTURB = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#0065FF;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=17;fontStyle=1;html=1;sketch=0;',
  },
  _width: 0,
  _height: 32,
}

export function AvatarDoNotDisturb(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVATAR_DO_NOT_DISTURB}
      {...props}
      _style={extendStyle(AVATAR_DO_NOT_DISTURB, props)}
    />
  )
}
