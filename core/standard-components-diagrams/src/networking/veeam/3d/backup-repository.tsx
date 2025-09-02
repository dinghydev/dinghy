import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_REPOSITORY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.backup_repository;',
  },
  _original_width: 62,
  _original_height: 62,
}

export function BackupRepository(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_REPOSITORY}
      {...props}
      _style={extendStyle(BACKUP_REPOSITORY, props)}
    />
  )
}
