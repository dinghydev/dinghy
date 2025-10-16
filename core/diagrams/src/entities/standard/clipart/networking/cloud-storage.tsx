import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_STORAGE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Cloud_Storage_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
