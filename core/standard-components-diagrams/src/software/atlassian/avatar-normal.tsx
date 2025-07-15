import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AVATAR_NORMAL = {
  _style:
    'shape=ellipse;fillColor=#36B37E;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=17;fontStyle=1;html=1;sketch=0;',
  _width: 32,
  _height: 32,
}

export function AvatarNormal(props: DiagramNodeProps) {
  return <Shape {...AVATAR_NORMAL} {...props} />
}
