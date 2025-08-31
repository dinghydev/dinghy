import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Machine_2.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 46,
}

export function Vm(props: DiagramNodeProps) {
  return <Shape {...VM} {...props} _style={extendStyle(VM, props)} />
}
