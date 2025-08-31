import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PALM_TREO = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/telecommunication/Palm_Treo_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function PalmTreo(props: DiagramNodeProps) {
  return (
    <Shape {...PALM_TREO} {...props} _style={extendStyle(PALM_TREO, props)} />
  )
}
