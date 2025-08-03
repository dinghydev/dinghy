import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIRE = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Tire_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Tire(props: DiagramNodeProps) {
  return <Shape {...TIRE} {...props} />
}
