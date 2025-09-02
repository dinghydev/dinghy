import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STYLUS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Stylus_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Stylus(props: DiagramNodeProps) {
  return <Shape {...STYLUS} {...props} _style={extendStyle(STYLUS, props)} />
}
