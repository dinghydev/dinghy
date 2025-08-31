import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_FROM_STORAGE_SNAPSHOTS = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.backup_from_storage_snapshots;',
  _width: 34,
  _height: 34,
}

export function BackupFromStorageSnapshots(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_FROM_STORAGE_SNAPSHOTS}
      {...props}
      _style={extendStyle(BACKUP_FROM_STORAGE_SNAPSHOTS, props)}
    />
  )
}
