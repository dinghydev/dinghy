import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_COMPUTER_PRIVATE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Cloud_Computer_Private_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function CloudComputerPrivate(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_COMPUTER_PRIVATE}
      {...props}
      _style={extendStyle(CLOUD_COMPUTER_PRIVATE, props)}
    />
  )
}
