import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SIGNALTOWER_OFF = {
  _style:
    'image;html=1;image=img/lib/clip_art/telecommunication/Signal_tower_off_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function SignaltowerOff(props: DiagramNodeProps) {
  return <Shape {...SIGNALTOWER_OFF} {...props} />
}
