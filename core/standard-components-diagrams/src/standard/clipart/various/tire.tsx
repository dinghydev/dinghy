import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIRE = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Tire_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Tire(props: DiagramNodeProps) {
  return <Shape {...TIRE} {...props} _style={extendStyle(TIRE, props)} />
}
