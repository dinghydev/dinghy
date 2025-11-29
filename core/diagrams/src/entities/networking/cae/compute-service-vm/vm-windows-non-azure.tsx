import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_WINDOWS_NON_AZURE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VM_Windows_Non_Azure.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function VmWindowsNonAzure(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VM_WINDOWS_NON_AZURE)} />
}
