import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_SNAPSHOT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#A2C6E0;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vm_snapshot;',
  },
  _width: 60.8,
  _height: 58.4,
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
