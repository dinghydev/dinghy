import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUTER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Router_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Router(props: DiagramNodeProps) {
  return <Shape {...ROUTER} {...props} _style={extendStyle(ROUTER, props)} />
}
