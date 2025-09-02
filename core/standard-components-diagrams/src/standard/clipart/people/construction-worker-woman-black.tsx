import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSTRUCTION_WORKER_WOMAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Construction_Worker_Woman_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ConstructionWorkerWomanBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSTRUCTION_WORKER_WOMAN_BLACK}
      {...props}
      _style={extendStyle(CONSTRUCTION_WORKER_WOMAN_BLACK, props)}
    />
  )
}
