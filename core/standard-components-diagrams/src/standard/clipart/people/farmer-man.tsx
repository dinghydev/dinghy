import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FARMER_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Farmer_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function FarmerMan(props: DiagramNodeProps) {
  return (
    <Shape {...FARMER_MAN} {...props} _style={extendStyle(FARMER_MAN, props)} />
  )
}
