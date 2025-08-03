import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_SERVER = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Cloud_Server_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function CloudServer(props: DiagramNodeProps) {
  return <Shape {...CLOUD_SERVER} {...props} />
}
