import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_BACKUP = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.vm_backup;',
  },
  _width: 57.2,
  _height: 53.2,
}

export function VmBackup(props: DiagramNodeProps) {
  return (
    <Shape {...VM_BACKUP} {...props} _style={extendStyle(VM_BACKUP, props)} />
  )
}
