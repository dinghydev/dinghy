import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_PAUSED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vm_paused;',
  },
  _original_width: 54,
  _original_height: 52,
}

export function VmPaused(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VM_PAUSED)} />
}
