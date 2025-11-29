import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACKUP_AND_REPLICATION_SERVER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_backup_and_replication_server;',
  },
  _original_width: 76,
  _original_height: 72,
}

export function BackupAndReplicationServer(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, BACKUP_AND_REPLICATION_SERVER)}
    />
  )
}
