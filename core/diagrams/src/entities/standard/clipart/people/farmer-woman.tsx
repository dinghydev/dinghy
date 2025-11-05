import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FARMER_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Farmer_Woman_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function FarmerWoman(props: NodeProps) {
  return (
    <Shape
      {...FARMER_WOMAN}
      {...props}
      _style={extendStyle(FARMER_WOMAN, props)}
    />
  )
}
