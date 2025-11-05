import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLACKBERRY = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/telecommunication/BlackBerry_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Blackberry(props: NodeProps) {
  return (
    <Shape {...BLACKBERRY} {...props} _style={extendStyle(BLACKBERRY, props)} />
  )
}
