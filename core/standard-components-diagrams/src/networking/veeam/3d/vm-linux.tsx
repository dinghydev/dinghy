import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_LINUX = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_linux;',
  },
  _width: 46,
  _height: 60,
}

export function VmLinux(props: DiagramNodeProps) {
  return (
    <Shape {...VM_LINUX} {...props} _style={extendStyle(VM_LINUX, props)} />
  )
}
