import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_FAILED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_failed;',
  },
  _original_width: 56,
  _original_height: 46,
}

export function VmFailed(props: DiagramNodeProps) {
  return (
    <Shape {...VM_FAILED} {...props} _style={extendStyle(VM_FAILED, props)} />
  )
}
