import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STAR = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Star_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Star(props: DiagramNodeProps) {
  return <Shape {...STAR} {...props} _style={extendStyle(STAR, props)} />
}
