import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_MACHINE = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Virtual_Machine_128x128.png',
  _width: 80,
  _height: 80,
}

export function VirtualMachine(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_MACHINE} {...props} />
}
