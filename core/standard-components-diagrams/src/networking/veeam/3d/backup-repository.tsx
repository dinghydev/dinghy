import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACKUP_REPOSITORY = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.backup_repository;',
  _width: 62,
  _height: 62,
}

export function BackupRepository(props: DiagramNodeProps) {
  return <Shape {...BACKUP_REPOSITORY} {...props} />
}
