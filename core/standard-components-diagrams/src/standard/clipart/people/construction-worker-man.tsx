import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRUCTION_WORKER_MAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Construction_Worker_Man_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ConstructionWorkerMan(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSTRUCTION_WORKER_MAN}
      {...props}
      _style={extendStyle(CONSTRUCTION_WORKER_MAN, props)}
    />
  )
}
