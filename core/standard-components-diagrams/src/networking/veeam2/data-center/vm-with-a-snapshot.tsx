import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_WITH_A_SNAPSHOT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vm_with_a_snapshot;',
  _width: 42,
  _height: 42,
}

export function VmWithASnapshot(props: DiagramNodeProps) {
  return <Shape {...VM_WITH_A_SNAPSHOT} {...props} />
}
