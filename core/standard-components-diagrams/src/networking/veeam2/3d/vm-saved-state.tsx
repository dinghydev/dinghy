import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_SAVED_STATE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_saved_state;',
  },
  _original_width: 58,
  _original_height: 48,
}

export function VmSavedState(props: DiagramNodeProps) {
  return (
    <Shape
      {...VM_SAVED_STATE}
      {...props}
      _style={extendStyle(VM_SAVED_STATE, props)}
    />
  )
}
