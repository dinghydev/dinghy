import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRINT_SERVER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Print_Server_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function PrintServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRINT_SERVER)} />
}
