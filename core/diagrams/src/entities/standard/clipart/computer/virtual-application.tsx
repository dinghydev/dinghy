import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_APPLICATION = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Virtual_Application_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function VirtualApplication(props: NodeProps) {
  return (
    <Shape
      {...VIRTUAL_APPLICATION}
      {...props}
      _style={extendStyle(VIRTUAL_APPLICATION, props)}
    />
  )
}
