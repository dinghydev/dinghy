import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONSTRUCTION_WORKER_MAN_BLACK = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Construction_Worker_Man_Black_128x128.png',
  _width: 80,
  _height: 80,
}

export function ConstructionWorkerManBlack(props: DiagramNodeProps) {
  return <Shape {...CONSTRUCTION_WORKER_MAN_BLACK} {...props} />
}
