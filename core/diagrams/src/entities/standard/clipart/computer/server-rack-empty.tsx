import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_RACK_EMPTY = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Server_Rack_Empty_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ServerRackEmpty(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVER_RACK_EMPTY)} />
}
