import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON = {
  _style: {
    entity: 'icon;html=1;image=img/clipart/Gear_128x128.png',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Icon(props: DiagramNodeProps) {
  return <Shape {...ICON} {...props} _style={extendStyle(ICON, props)} />
}
