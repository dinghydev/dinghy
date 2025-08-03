import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_DOWN = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Arrow_Down_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function ArrowDown(props: DiagramNodeProps) {
  return <Shape {...ARROW_DOWN} {...props} />
}
