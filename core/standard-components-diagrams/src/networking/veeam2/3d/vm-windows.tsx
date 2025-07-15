import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_WINDOWS = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_windows;',
  _width: 46,
  _height: 60,
}

export function VmWindows(props: DiagramNodeProps) {
  return <Shape {...VM_WINDOWS} {...props} />
}
