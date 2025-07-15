import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_KERNEL = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vm_kernel;',
  _width: 54,
  _height: 52,
}

export function VmKernel(props: DiagramNodeProps) {
  return <Shape {...VM_KERNEL} {...props} />
}
