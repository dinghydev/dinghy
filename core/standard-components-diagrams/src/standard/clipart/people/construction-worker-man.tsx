import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONSTRUCTION_WORKER_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Construction_Worker_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
