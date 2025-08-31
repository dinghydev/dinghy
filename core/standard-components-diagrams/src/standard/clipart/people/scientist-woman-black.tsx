import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCIENTIST_WOMAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Scientist_Woman_Black_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ScientistWomanBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCIENTIST_WOMAN_BLACK}
      {...props}
      _style={extendStyle(SCIENTIST_WOMAN_BLACK, props)}
    />
  )
}
