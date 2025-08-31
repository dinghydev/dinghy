import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SERVER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Cloud_Server_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function CloudServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SERVER}
      {...props}
      _style={extendStyle(CLOUD_SERVER, props)}
    />
  )
}
