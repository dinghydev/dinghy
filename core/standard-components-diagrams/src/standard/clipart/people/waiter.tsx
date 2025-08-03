import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAITER = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Waiter_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Waiter(props: DiagramNodeProps) {
  return <Shape {...WAITER} {...props} />
}
