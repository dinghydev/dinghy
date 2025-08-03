import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_COMPUTER = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Cloud_Computer_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function CloudComputer(props: DiagramNodeProps) {
  return <Shape {...CLOUD_COMPUTER} {...props} />
}
