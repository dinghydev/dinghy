import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTER_ICON = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Router_Icon_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function RouterIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUTER_ICON}
      {...props}
      _style={extendStyle(ROUTER_ICON, props)}
    />
  )
}
