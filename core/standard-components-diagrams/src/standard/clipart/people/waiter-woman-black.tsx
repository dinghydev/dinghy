import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAITER_WOMAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Waiter_Woman_Black_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function WaiterWomanBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...WAITER_WOMAN_BLACK}
      {...props}
      _style={extendStyle(WAITER_WOMAN_BLACK, props)}
    />
  )
}
