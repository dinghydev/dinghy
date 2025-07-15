import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MILITARY_OFFICER = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Military_Officer_128x128.png',
  _width: 80,
  _height: 80,
}

export function MilitaryOfficer(props: DiagramNodeProps) {
  return <Shape {...MILITARY_OFFICER} {...props} />
}
