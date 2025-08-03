import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCIENTIST_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Scientist_Woman_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function ScientistWoman(props: DiagramNodeProps) {
  return <Shape {...SCIENTIST_WOMAN} {...props} />
}
