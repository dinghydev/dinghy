import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISKS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Discs.svg;strokeColor=none;',
  _width: 50,
  _height: 42,
}

export function Disks(props: DiagramNodeProps) {
  return <Shape {...DISKS} {...props} />
}
