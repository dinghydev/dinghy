import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACKUP_RECOVERY_TIME_OBJECTIVE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.backup_recovery_time_objective;',
  },
  _original_width: 78,
  _original_height: 75,
}

export function BackupRecoveryTimeObjective(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, BACKUP_RECOVERY_TIME_OBJECTIVE)}
    />
  )
}
