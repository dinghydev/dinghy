import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCIENTIST_MAN_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Scientist_Man_Black_128x128.png',
  _width: 80,
  _height: 80,
}

export function ScientistManBlack(props: DiagramNodeProps) {
  return <Shape {...SCIENTIST_MAN_BLACK} {...props} />
}
