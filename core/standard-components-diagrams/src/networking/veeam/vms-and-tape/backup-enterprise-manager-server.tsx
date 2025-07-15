import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACKUP_ENTERPRISE_MANAGER_SERVER = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_backup_enterprise_manager_server;',
  _width: 76,
  _height: 72,
}

export function BackupEnterpriseManagerServer(props: DiagramNodeProps) {
  return <Shape {...BACKUP_ENTERPRISE_MANAGER_SERVER} {...props} />
}
