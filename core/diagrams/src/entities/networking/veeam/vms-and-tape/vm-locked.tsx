import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_LOCKED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.vm_locked;',
  },
  _original_width: 55.6,
  _original_height: 52,
}

export function VmLocked(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VM_LOCKED)} />
}
