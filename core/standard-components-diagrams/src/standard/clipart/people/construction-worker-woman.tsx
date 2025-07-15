import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONSTRUCTION_WORKER_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Construction_Worker_Woman_128x128.png',
  _width: 80,
  _height: 80,
}

export function ConstructionWorkerWoman(props: DiagramNodeProps) {
  return <Shape {...CONSTRUCTION_WORKER_WOMAN} {...props} />
}
