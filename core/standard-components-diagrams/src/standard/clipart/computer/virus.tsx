import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRUS = {
  _style: 'image;html=1;image=img/lib/clip_art/computers/Virus_128x128.png',
  _width: 80,
  _height: 80,
}

export function Virus(props: DiagramNodeProps) {
  return <Shape {...VIRUS} {...props} />
}
