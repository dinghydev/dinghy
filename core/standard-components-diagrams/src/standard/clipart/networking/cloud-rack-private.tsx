import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_RACK_PRIVATE = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Cloud_Rack_Private_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CloudRackPrivate(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_RACK_PRIVATE}
      {...props}
      _style={extendStyle(CLOUD_RACK_PRIVATE, props)}
    />
  )
}
