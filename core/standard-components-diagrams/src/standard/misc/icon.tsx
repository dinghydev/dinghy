import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON = {
  _style: 'icon;html=1;image=img/clipart/Gear_128x128.png',
  _width: 60,
  _height: 60,
}

export function Icon(props: DiagramNodeProps) {
  return <Shape {...ICON} {...props} _style={extendStyle(ICON, props)} />
}
