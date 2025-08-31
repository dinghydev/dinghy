import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCIENTIST_MAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Scientist_Man_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ScientistMan(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCIENTIST_MAN}
      {...props}
      _style={extendStyle(SCIENTIST_MAN, props)}
    />
  )
}
