import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_2 = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Machine.svg;',
  _width: 50,
  _height: 46,
}

export function Vm2(props: DiagramNodeProps) {
  return <Shape {...VM_2} {...props} />
}
