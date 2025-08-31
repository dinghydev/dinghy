import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTANT_VM_RECOVERY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.instant_vm_recovery;',
  },
  _width: 34,
  _height: 34,
}

export function InstantVmRecovery(props: DiagramNodeProps) {
  return (
    <Shape
      {...INSTANT_VM_RECOVERY}
      {...props}
      _style={extendStyle(INSTANT_VM_RECOVERY, props)}
    />
  )
}
