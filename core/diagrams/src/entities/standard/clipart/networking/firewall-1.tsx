import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIREWALL_1 = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Firewall_02_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Firewall1(props: NodeProps) {
  return (
    <Shape {...FIREWALL_1} {...props} _style={extendStyle(FIREWALL_1, props)} />
  )
}
