import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FARMER_MAN_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Farmer_Man_Black_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function FarmerManBlack(props: DiagramNodeProps) {
  return <Shape {...FARMER_MAN_BLACK} {...props} />
}
