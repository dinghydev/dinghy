import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOLLAR = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/finance/Dollar_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Dollar(props: DiagramNodeProps) {
  return <Shape {...DOLLAR} {...props} _style={extendStyle(DOLLAR, props)} />
}
