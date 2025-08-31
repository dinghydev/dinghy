import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOUCH = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Touch_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Touch(props: DiagramNodeProps) {
  return <Shape {...TOUCH} {...props} _style={extendStyle(TOUCH, props)} />
}
