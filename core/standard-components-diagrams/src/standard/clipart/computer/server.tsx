import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Server_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Server(props: DiagramNodeProps) {
  return <Shape {...SERVER} {...props} _style={extendStyle(SERVER, props)} />
}
