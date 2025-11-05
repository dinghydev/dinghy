import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURE_SYSTEM = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Secure_System_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SecureSystem(props: NodeProps) {
  return (
    <Shape
      {...SECURE_SYSTEM}
      {...props}
      _style={extendStyle(SECURE_SYSTEM, props)}
    />
  )
}
