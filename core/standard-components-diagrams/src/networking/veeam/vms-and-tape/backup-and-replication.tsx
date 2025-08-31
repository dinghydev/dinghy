import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_AND_REPLICATION = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.backup_replication;',
  _width: 44.8,
  _height: 44.8,
}

export function BackupAndReplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_AND_REPLICATION}
      {...props}
      _style={extendStyle(BACKUP_AND_REPLICATION, props)}
    />
  )
}
