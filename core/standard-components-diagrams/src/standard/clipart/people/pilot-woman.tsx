import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PILOT_WOMAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Pilot_Woman_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function PilotWoman(props: DiagramNodeProps) {
  return <Shape {...PILOT_WOMAN} {...props} />
}
