import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKER_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Worker_Black_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
