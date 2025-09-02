import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_TOWER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Server_Tower_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
