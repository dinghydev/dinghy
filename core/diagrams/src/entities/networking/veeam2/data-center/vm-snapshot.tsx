import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_SNAPSHOT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vm_snapshot;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function VmSnapshot(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VM_SNAPSHOT)} />
}
