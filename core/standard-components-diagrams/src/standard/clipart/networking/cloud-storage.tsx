import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_STORAGE = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Cloud_Storage_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function CloudStorage(props: DiagramNodeProps) {
  return <Shape {...CLOUD_STORAGE} {...props} />
}
