import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PILOT_MAN = {
  _style: 'image;html=1;image=img/lib/clip_art/people/Pilot_Man_128x128.png',
  _width: 80,
  _height: 80,
}

export function PilotMan(props: DiagramNodeProps) {
  return <Shape {...PILOT_MAN} {...props} />
}
