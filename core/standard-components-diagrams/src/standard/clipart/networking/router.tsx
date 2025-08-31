import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROUTER = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Router_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Router(props: DiagramNodeProps) {
  return <Shape {...ROUTER} {...props} _style={extendStyle(ROUTER, props)} />
}
