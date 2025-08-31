import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPLICATION_FROM_A_BACKUP = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.replication_from_a_backup;',
  _width: 44.8,
  _height: 44.8,
}

export function ReplicationFromABackup(props: DiagramNodeProps) {
  return (
    <Shape
      {...REPLICATION_FROM_A_BACKUP}
      {...props}
      _style={extendStyle(REPLICATION_FROM_A_BACKUP, props)}
    />
  )
}
