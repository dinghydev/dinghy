import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_RACK_PARTIAL = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Server_Rack_Partial_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ServerRackPartial(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_RACK_PARTIAL}
      {...props}
      _style={extendStyle(SERVER_RACK_PARTIAL, props)}
    />
  )
}
