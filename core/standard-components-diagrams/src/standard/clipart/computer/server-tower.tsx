import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_TOWER = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Server_Tower_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ServerTower(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_TOWER}
      {...props}
      _style={extendStyle(SERVER_TOWER, props)}
    />
  )
}
