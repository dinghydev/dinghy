import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_FAILED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.vm_failed;',
  },
  _original_width: 54,
  _original_height: 52,
}

export function VmFailed(props: NodeProps) {
  return (
    <Shape {...VM_FAILED} {...props} _style={extendStyle(VM_FAILED, props)} />
  )
}
