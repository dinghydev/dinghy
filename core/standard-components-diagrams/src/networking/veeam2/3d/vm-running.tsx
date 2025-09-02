import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_RUNNING = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_running;',
  },
  _original_width: 56,
  _original_height: 46,
}

export function VmRunning(props: DiagramNodeProps) {
  return (
    <Shape {...VM_RUNNING} {...props} _style={extendStyle(VM_RUNNING, props)} />
  )
}
