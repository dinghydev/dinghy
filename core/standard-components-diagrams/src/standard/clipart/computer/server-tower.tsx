import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_TOWER = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Server_Tower_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function ServerTower(props: DiagramNodeProps) {
  return <Shape {...SERVER_TOWER} {...props} />
}
