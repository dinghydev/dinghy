import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCIENTIST_MAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Scientist_Man_Black_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
