import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SCIENTIST_MAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Scientist_Man_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function ScientistManBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCIENTIST_MAN_BLACK}
      {...props}
      _style={extendStyle(SCIENTIST_MAN_BLACK, props)}
    />
  )
}
