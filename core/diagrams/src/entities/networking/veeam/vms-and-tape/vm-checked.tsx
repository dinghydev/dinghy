import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_CHECKED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vm_checked;',
  },
  _original_width: 54,
  _original_height: 52,
}

export function VmChecked(props: NodeProps) {
  return (
    <Shape {...VM_CHECKED} {...props} _style={extendStyle(VM_CHECKED, props)} />
  )
}
