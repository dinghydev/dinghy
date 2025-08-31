import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCK = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Lock_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Lock(props: DiagramNodeProps) {
  return <Shape {...LOCK} {...props} _style={extendStyle(LOCK, props)} />
}
