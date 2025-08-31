import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_STORAGE = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Cloud_Storage_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CloudStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_STORAGE}
      {...props}
      _style={extendStyle(CLOUD_STORAGE, props)}
    />
  )
}
