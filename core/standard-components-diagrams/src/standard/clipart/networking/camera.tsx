import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAMERA = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Ip_Camera_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Camera(props: DiagramNodeProps) {
  return <Shape {...CAMERA} {...props} _style={extendStyle(CAMERA, props)} />
}
