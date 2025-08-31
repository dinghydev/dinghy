import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_2 = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Machine.svg;strokeColor=none;',
  _width: 50,
  _height: 46,
}

export function Vm2(props: DiagramNodeProps) {
  return <Shape {...VM_2} {...props} _style={extendStyle(VM_2, props)} />
}
