import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKSTATION = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Workstation_128x128.png',
  _width: 80,
  _height: 80,
}

export function Workstation(props: DiagramNodeProps) {
  return <Shape {...WORKSTATION} {...props} />
}
