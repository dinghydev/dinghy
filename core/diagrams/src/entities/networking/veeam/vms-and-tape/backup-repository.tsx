import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACKUP_REPOSITORY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.backup_repository;',
  },
  _original_width: 54,
  _original_height: 50,
}

export function BackupRepository(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BACKUP_REPOSITORY)} />
}
