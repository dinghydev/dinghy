import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEYS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Keys_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Keys(props: DiagramNodeProps) {
  return <Shape {...KEYS} {...props} _style={extendStyle(KEYS, props)} />
}
