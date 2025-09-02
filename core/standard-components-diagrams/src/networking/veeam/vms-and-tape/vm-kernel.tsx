import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_KERNEL = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vm_kernel;',
  },
  _original_width: 54,
  _original_height: 52,
}

export function VmKernel(props: DiagramNodeProps) {
  return (
    <Shape {...VM_KERNEL} {...props} _style={extendStyle(VM_KERNEL, props)} />
  )
}
