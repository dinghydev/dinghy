import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_AVATAR_MEDIUM = {
  _style: {
    entity:
      'rounded=1;arcSize=5;fillColor=#0065FF;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=12;fontStyle=1;html=1;sketch=0;',
  },
  _width: 32,
  _height: 32,
}

export function ContainerAvatarMedium(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_AVATAR_MEDIUM}
      {...props}
      _style={extendStyle(CONTAINER_AVATAR_MEDIUM, props)}
    />
  )
}
