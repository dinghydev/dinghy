import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_RACK_PARTIAL = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Server_Rack_Partial_128x128.png',
  _width: 80,
  _height: 80,
}

export function ServerRackPartial(props: DiagramNodeProps) {
  return <Shape {...SERVER_RACK_PARTIAL} {...props} />
}
