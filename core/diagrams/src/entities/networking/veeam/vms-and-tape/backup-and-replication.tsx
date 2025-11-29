import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACKUP_AND_REPLICATION = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.backup_replication;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function BackupAndReplication(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, BACKUP_AND_REPLICATION)} />
  )
}
