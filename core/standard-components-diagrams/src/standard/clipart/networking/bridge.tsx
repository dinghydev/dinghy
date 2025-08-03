import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BRIDGE = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Bridge_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Bridge(props: DiagramNodeProps) {
  return <Shape {...BRIDGE} {...props} />
}
