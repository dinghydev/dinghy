import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_SNAPSHOT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vm_snapshot;',
  _width: 38,
  _height: 38,
}

export function VmSnapshot(props: DiagramNodeProps) {
  return (
    <Shape
      {...VM_SNAPSHOT}
      {...props}
      _style={extendStyle(VM_SNAPSHOT, props)}
    />
  )
}
