import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAITER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Waiter_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Waiter(props: DiagramNodeProps) {
  return <Shape {...WAITER} {...props} _style={extendStyle(WAITER, props)} />
}
