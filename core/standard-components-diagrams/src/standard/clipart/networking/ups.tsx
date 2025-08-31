import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UPS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/UPS_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Ups(props: DiagramNodeProps) {
  return <Shape {...UPS} {...props} _style={extendStyle(UPS, props)} />
}
