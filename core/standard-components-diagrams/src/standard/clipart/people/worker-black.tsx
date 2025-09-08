import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKER_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Worker_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function WorkerBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKER_BLACK}
      {...props}
      _style={extendStyle(WORKER_BLACK, props)}
    />
  )
}
