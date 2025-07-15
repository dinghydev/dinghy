import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_RUNNING = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vm_running;',
  _width: 36,
  _height: 36,
}

export function VmRunning(props: DiagramNodeProps) {
  return <Shape {...VM_RUNNING} {...props} />
}
