import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_SNAPSHOT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#A2C6E0;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vm_snapshot;',
  },
  _original_width: 60.8,
  _original_height: 58.4,
}

export function VmSnapshot(props: NodeProps) {
  return (
    <Shape
      {...VM_SNAPSHOT}
      {...props}
      _style={extendStyle(VM_SNAPSHOT, props)}
    />
  )
}
