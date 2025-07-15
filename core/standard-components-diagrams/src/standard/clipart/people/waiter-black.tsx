import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAITER_BLACK = {
  _style: 'image;html=1;image=img/lib/clip_art/people/Waiter_Black_128x128.png',
  _width: 80,
  _height: 80,
}

export function WaiterBlack(props: DiagramNodeProps) {
  return <Shape {...WAITER_BLACK} {...props} />
}
