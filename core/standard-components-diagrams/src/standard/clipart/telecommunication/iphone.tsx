import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPHONE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/telecommunication/iPhone_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Iphone(props: DiagramNodeProps) {
  return <Shape {...IPHONE} {...props} _style={extendStyle(IPHONE, props)} />
}
