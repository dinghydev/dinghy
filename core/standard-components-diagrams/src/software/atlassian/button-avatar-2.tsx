import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_AVATAR_2 = {
  _style: 'rounded=1;fillColor=#253858;strokeColor=none;html=1;',
  _width: 1,
  _height: 167,
}

export function ButtonAvatar2(props: DiagramNodeProps) {
  return <Shape {...BUTTON_AVATAR_2} {...props} />
}
