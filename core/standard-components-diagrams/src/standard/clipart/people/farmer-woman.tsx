import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FARMER_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Farmer_Woman_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function FarmerWoman(props: DiagramNodeProps) {
  return <Shape {...FARMER_WOMAN} {...props} />
}
