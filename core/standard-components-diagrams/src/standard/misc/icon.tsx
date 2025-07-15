import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON = {
  _style: 'icon;html=1;image=img/clipart/Gear_128x128.png',
  _width: 60,
  _height: 60,
}

export function Icon(props: DiagramNodeProps) {
  return <Shape {...ICON} {...props} />
}
