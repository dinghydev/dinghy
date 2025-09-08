import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAMERA = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Ip_Camera_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Camera(props: DiagramNodeProps) {
  return <Shape {...CAMERA} {...props} _style={extendStyle(CAMERA, props)} />
}
