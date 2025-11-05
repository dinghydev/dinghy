import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_WINDOWS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VirtualMachineWindows.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function VmWindows(props: NodeProps) {
  return (
    <Shape {...VM_WINDOWS} {...props} _style={extendStyle(VM_WINDOWS, props)} />
  )
}
