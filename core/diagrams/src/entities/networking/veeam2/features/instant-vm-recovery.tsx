import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSTANT_VM_RECOVERY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.instant_vm_recovery;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function InstantVmRecovery(props: NodeProps) {
  return (
    <Shape
      {...INSTANT_VM_RECOVERY}
      {...props}
      _style={extendStyle(INSTANT_VM_RECOVERY, props)}
    />
  )
}
