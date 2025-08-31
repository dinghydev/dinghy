import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_COMPUTER_PRIVATE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Cloud_Computer_Private_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
