import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_RACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Server_Rack_128x128.png',
  _width: 80,
  _height: 80,
}

export function ServerRack(props: DiagramNodeProps) {
  return <Shape {...SERVER_RACK} {...props} />
}
