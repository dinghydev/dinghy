import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Cloud_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Cloud(props: DiagramNodeProps) {
  return <Shape {...CLOUD} {...props} _style={extendStyle(CLOUD, props)} />
}
