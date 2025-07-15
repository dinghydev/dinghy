import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_RACK_PRIVATE = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Cloud_Rack_Private_128x128.png',
  _width: 80,
  _height: 80,
}

export function CloudRackPrivate(props: DiagramNodeProps) {
  return <Shape {...CLOUD_RACK_PRIVATE} {...props} />
}
