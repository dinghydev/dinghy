import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_FAILED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.vm_failed;',
  },
  _width: 54,
  _height: 52,
}

export function VmFailed(props: DiagramNodeProps) {
  return (
    <Shape {...VM_FAILED} {...props} _style={extendStyle(VM_FAILED, props)} />
  )
}
