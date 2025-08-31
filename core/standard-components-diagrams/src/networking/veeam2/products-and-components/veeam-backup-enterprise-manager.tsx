import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_BACKUP_ENTERPRISE_MANAGER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_backup_enterprise_manager;',
  _width: 34,
  _height: 34,
}

export function VeeamBackupEnterpriseManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_BACKUP_ENTERPRISE_MANAGER}
      {...props}
      _style={extendStyle(VEEAM_BACKUP_ENTERPRISE_MANAGER, props)}
    />
  )
}
