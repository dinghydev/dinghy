import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FARMER_WOMAN_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Farmer_Woman_Black_128x128.png',
  _width: 80,
  _height: 80,
}

export function FarmerWomanBlack(props: DiagramNodeProps) {
  return <Shape {...FARMER_WOMAN_BLACK} {...props} />
}
