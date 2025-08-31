import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_RACK_EMPTY = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Server_Rack_Empty_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ServerRackEmpty(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_RACK_EMPTY}
      {...props}
      _style={extendStyle(SERVER_RACK_EMPTY, props)}
    />
  )
}
