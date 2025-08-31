import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_AVATAR_LARGE = {
  _style: {
    entity:
      'rounded=1;arcSize=5;fillColor=#0065FF;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=14;fontStyle=1;html=1;sketch=0;',
  },
  _width: 40,
  _height: 40,
}

export function ContainerAvatarLarge(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_AVATAR_LARGE}
      {...props}
      _style={extendStyle(CONTAINER_AVATAR_LARGE, props)}
    />
  )
}
