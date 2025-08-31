import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_AND_REPLICATION_SERVER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_backup_and_replication_server;',
  },
  _width: 76,
  _height: 72,
}

export function BackupAndReplicationServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_AND_REPLICATION_SERVER}
      {...props}
      _style={extendStyle(BACKUP_AND_REPLICATION_SERVER, props)}
    />
  )
}
