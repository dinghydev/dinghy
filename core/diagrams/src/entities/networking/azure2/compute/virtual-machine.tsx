import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_MACHINE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Virtual_Machine.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 64,
}

export function VirtualMachine(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIRTUAL_MACHINE)} />
}
