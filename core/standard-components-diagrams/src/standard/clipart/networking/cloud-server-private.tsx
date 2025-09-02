import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SERVER_PRIVATE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Cloud_Server_Private_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function CloudServerPrivate(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SERVER_PRIVATE}
      {...props}
      _style={extendStyle(CLOUD_SERVER_PRIVATE, props)}
    />
  )
}
