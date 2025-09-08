import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WAITER_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Waiter_Woman_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
