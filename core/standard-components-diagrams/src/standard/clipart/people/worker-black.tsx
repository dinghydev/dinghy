import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKER_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Worker_Black_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function WorkerBlack(props: DiagramNodeProps) {
  return <Shape {...WORKER_BLACK} {...props} />
}
