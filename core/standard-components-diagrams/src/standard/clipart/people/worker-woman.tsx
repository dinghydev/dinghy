import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKER_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Worker_Woman_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function WorkerWoman(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKER_WOMAN}
      {...props}
      _style={extendStyle(WORKER_WOMAN, props)}
    />
  )
}
