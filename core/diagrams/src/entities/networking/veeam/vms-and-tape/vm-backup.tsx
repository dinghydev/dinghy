import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_BACKUP = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.vm_backup;',
  },
  _original_width: 57.2,
  _original_height: 53.2,
}

export function VmBackup(props: DiagramNodeProps) {
  return (
    <Shape {...VM_BACKUP} {...props} _style={extendStyle(VM_BACKUP, props)} />
  )
}
