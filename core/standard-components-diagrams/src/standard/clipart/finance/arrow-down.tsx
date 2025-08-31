import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_DOWN = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Arrow_Down_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ArrowDown(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_DOWN} {...props} _style={extendStyle(ARROW_DOWN, props)} />
  )
}
