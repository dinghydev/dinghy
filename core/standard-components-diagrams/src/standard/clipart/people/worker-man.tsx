import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKER_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Worker_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function WorkerMan(props: DiagramNodeProps) {
  return (
    <Shape {...WORKER_MAN} {...props} _style={extendStyle(WORKER_MAN, props)} />
  )
}
