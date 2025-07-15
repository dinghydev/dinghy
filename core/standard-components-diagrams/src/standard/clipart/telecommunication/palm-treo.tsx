import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PALM_TREO = {
  _style:
    'image;html=1;image=img/lib/clip_art/telecommunication/Palm_Treo_128x128.png',
  _width: 80,
  _height: 80,
}

export function PalmTreo(props: DiagramNodeProps) {
  return <Shape {...PALM_TREO} {...props} />
}
