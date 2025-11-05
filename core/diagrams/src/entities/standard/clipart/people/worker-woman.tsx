import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKER_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Worker_Woman_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function WorkerWoman(props: NodeProps) {
  return (
    <Shape
      {...WORKER_WOMAN}
      {...props}
      _style={extendStyle(WORKER_WOMAN, props)}
    />
  )
}
