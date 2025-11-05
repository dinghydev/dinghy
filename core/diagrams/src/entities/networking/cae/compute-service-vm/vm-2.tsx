import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_2 = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Machine.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function Vm2(props: NodeProps) {
  return <Shape {...VM_2} {...props} _style={extendStyle(VM_2, props)} />
}
