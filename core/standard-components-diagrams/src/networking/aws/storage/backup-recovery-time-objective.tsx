import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_RECOVERY_TIME_OBJECTIVE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.backup_recovery_time_objective;',
  _width: 78,
  _height: 75,
}

export function BackupRecoveryTimeObjective(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_RECOVERY_TIME_OBJECTIVE}
      {...props}
      _style={extendStyle(BACKUP_RECOVERY_TIME_OBJECTIVE, props)}
    />
  )
}
