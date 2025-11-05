import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURITY_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Security_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SecurityMan(props: NodeProps) {
  return (
    <Shape
      {...SECURITY_MAN}
      {...props}
      _style={extendStyle(SECURITY_MAN, props)}
    />
  )
}
