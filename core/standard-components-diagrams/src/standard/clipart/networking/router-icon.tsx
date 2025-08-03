import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTER_ICON = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Router_Icon_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function RouterIcon(props: DiagramNodeProps) {
  return <Shape {...ROUTER_ICON} {...props} />
}
