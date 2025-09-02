import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_VIRTUAL_MACHINE_MONITOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.backup_virtual_machine_monitor;',
  },
  _original_width: 70,
  _original_height: 78,
}

export function BackupVirtualMachineMonitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_VIRTUAL_MACHINE_MONITOR}
      {...props}
      _style={extendStyle(BACKUP_VIRTUAL_MACHINE_MONITOR, props)}
    />
  )
}
