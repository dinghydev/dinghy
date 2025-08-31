import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPEATER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Repeater_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Repeater(props: DiagramNodeProps) {
  return (
    <Shape {...REPEATER} {...props} _style={extendStyle(REPEATER, props)} />
  )
}
