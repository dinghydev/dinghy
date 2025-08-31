import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOFTWARE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Software_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Software(props: DiagramNodeProps) {
  return (
    <Shape {...SOFTWARE} {...props} _style={extendStyle(SOFTWARE, props)} />
  )
}
