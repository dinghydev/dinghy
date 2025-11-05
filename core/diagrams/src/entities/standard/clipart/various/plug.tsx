import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLUG = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Plug_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Plug(props: NodeProps) {
  return <Shape {...PLUG} {...props} _style={extendStyle(PLUG, props)} />
}
