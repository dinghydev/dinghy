import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIGNALTOWER_ON = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/telecommunication/Signal_tower_on_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function SignaltowerOn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SIGNALTOWER_ON)} />
}
