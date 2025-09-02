import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_WITH_A_SNAPSHOT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vm_with_a_snapshot;',
  },
  _original_width: 42,
  _original_height: 42,
}

export function VmWithASnapshot(props: DiagramNodeProps) {
  return (
    <Shape
      {...VM_WITH_A_SNAPSHOT}
      {...props}
      _style={extendStyle(VM_WITH_A_SNAPSHOT, props)}
    />
  )
}
