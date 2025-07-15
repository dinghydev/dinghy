import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_LINUX = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vm_linux;',
  _width: 57.2,
  _height: 55.2,
}

export function VmLinux(props: DiagramNodeProps) {
  return <Shape {...VM_LINUX} {...props} />
}
