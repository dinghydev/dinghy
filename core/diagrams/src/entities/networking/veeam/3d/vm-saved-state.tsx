import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VM_SAVED_STATE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_saved_state;',
  },
  _original_width: 58,
  _original_height: 48,
}

export function VmSavedState(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VM_SAVED_STATE)} />
}
