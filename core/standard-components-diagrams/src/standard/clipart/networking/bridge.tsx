import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRIDGE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Bridge_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Bridge(props: DiagramNodeProps) {
  return <Shape {...BRIDGE} {...props} _style={extendStyle(BRIDGE, props)} />
}
