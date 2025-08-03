import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MILITARY_OFFICER_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Military_Officer_Woman_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function MilitaryOfficerWoman(props: DiagramNodeProps) {
  return <Shape {...MILITARY_OFFICER_WOMAN} {...props} />
}
