import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FARMER_MAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Farmer_Man_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function FarmerMan(props: DiagramNodeProps) {
  return (
    <Shape {...FARMER_MAN} {...props} _style={extendStyle(FARMER_MAN, props)} />
  )
}
