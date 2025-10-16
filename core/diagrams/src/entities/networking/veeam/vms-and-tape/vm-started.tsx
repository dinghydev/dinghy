import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_STARTED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.vm_running;',
  },
  _original_width: 54,
  _original_height: 52,
}

export function VmStarted(props: DiagramNodeProps) {
  return (
    <Shape {...VM_STARTED} {...props} _style={extendStyle(VM_STARTED, props)} />
  )
}
