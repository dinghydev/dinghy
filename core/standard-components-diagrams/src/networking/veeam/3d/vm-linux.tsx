import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_LINUX = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_linux;',
  },
  _original_width: 46,
  _original_height: 60,
}

export function VmLinux(props: DiagramNodeProps) {
  return (
    <Shape {...VM_LINUX} {...props} _style={extendStyle(VM_LINUX, props)} />
  )
}
