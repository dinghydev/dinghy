import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FARMER_WOMAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Farmer_Woman_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function FarmerWomanBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...FARMER_WOMAN_BLACK}
      {...props}
      _style={extendStyle(FARMER_WOMAN_BLACK, props)}
    />
  )
}
