import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FARMER_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Farmer_Woman_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function FarmerWoman(props: DiagramNodeProps) {
  return (
    <Shape
      {...FARMER_WOMAN}
      {...props}
      _style={extendStyle(FARMER_WOMAN, props)}
    />
  )
}
