import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_FAILED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vm_failed;',
  },
  _width: 56,
  _height: 46,
}

export function VmFailed(props: DiagramNodeProps) {
  return (
    <Shape {...VM_FAILED} {...props} _style={extendStyle(VM_FAILED, props)} />
  )
}
