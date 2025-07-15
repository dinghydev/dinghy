import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_RUNNING = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_running;',
  _width: 56,
  _height: 46,
}

export function VmRunning(props: DiagramNodeProps) {
  return <Shape {...VM_RUNNING} {...props} />
}
