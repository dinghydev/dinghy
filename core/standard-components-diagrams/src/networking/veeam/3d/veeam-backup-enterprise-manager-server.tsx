import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_BACKUP_ENTERPRISE_MANAGER_SERVER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.veeam_backup_enterprise_manager_server;',
  },
  _original_width: 46,
  _original_height: 46,
}

export function VeeamBackupEnterpriseManagerServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_BACKUP_ENTERPRISE_MANAGER_SERVER}
      {...props}
      _style={extendStyle(VEEAM_BACKUP_ENTERPRISE_MANAGER_SERVER, props)}
    />
  )
}
