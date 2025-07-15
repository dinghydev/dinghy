import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AVATAR_LARGE = {
  _style:
    'shape=ellipse;fillColor=#6554C0;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=46;fontStyle=1;html=1;sketch=0;',
  _width: 96,
  _height: 96,
}

export function AvatarLarge(props: DiagramNodeProps) {
  return <Shape {...AVATAR_LARGE} {...props} />
}
