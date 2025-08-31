import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAFE = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Safe_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Safe(props: DiagramNodeProps) {
  return <Shape {...SAFE} {...props} _style={extendStyle(SAFE, props)} />
}
