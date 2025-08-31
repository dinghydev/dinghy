import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_LOCKED = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.vm_locked;',
  _width: 55.6,
  _height: 52,
}

export function VmLocked(props: DiagramNodeProps) {
  return (
    <Shape {...VM_LOCKED} {...props} _style={extendStyle(VM_LOCKED, props)} />
  )
}
