import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTAINER_AVATAR_SMALL = {
  _style:
    'rounded=1;arcSize=5;fillColor=#0065FF;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=10;fontStyle=1;html=1;sketch=0;',
  _width: 24,
  _height: 24,
}

export function ContainerAvatarSmall(props: DiagramNodeProps) {
  return <Shape {...CONTAINER_AVATAR_SMALL} {...props} />
}
