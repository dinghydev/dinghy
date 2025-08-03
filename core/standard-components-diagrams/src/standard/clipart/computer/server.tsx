import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Server_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Server(props: DiagramNodeProps) {
  return <Shape {...SERVER} {...props} />
}
