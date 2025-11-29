import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANTIVIRUS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Antivirus_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Antivirus(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANTIVIRUS)} />
}
