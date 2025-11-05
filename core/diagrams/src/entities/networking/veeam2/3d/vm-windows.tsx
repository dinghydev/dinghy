import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_WINDOWS = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_windows;',
  },
  _original_width: 46,
  _original_height: 60,
}

export function VmWindows(props: NodeProps) {
  return (
    <Shape {...VM_WINDOWS} {...props} _style={extendStyle(VM_WINDOWS, props)} />
  )
}
