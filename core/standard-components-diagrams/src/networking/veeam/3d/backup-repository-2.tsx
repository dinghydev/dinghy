import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACKUP_REPOSITORY_2 = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.backup_repository_2;',
  },
  _original_width: 62,
  _original_height: 62,
}

export function BackupRepository2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_REPOSITORY_2}
      {...props}
      _style={extendStyle(BACKUP_REPOSITORY_2, props)}
    />
  )
}
