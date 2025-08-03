import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAITER_WOMAN_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Waiter_Woman_Black_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function WaiterWomanBlack(props: DiagramNodeProps) {
  return <Shape {...WAITER_WOMAN_BLACK} {...props} />
}
