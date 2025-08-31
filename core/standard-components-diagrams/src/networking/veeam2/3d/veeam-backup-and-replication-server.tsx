import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_BACKUP_AND_REPLICATION_SERVER = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.veeam_backup_and_replication_server;',
  },
  _width: 46,
  _height: 46,
}

export function VeeamBackupAndReplicationServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_BACKUP_AND_REPLICATION_SERVER}
      {...props}
      _style={extendStyle(VEEAM_BACKUP_AND_REPLICATION_SERVER, props)}
    />
  )
}
