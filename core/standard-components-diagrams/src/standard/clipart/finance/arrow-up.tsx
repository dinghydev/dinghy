import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_UP = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Arrow_Up_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ArrowUp(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_UP} {...props} _style={extendStyle(ARROW_UP, props)} />
  )
}
