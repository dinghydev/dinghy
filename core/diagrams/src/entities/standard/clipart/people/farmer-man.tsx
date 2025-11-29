import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FARMER_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Farmer_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function FarmerMan(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FARMER_MAN)} />
}
