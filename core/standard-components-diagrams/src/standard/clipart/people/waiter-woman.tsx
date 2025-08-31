import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAITER_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Waiter_Woman_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function WaiterWoman(props: DiagramNodeProps) {
  return (
    <Shape
      {...WAITER_WOMAN}
      {...props}
      _style={extendStyle(WAITER_WOMAN, props)}
    />
  )
}
