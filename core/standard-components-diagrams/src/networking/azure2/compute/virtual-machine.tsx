import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_MACHINE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Virtual_Machine.svg;',
  _width: 69,
  _height: 64,
}

export function VirtualMachine(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_MACHINE} {...props} />
}
