import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACKUP_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.backup_service;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function BackupService(props: NodeProps) {
  return (
    <Shape
      {...BACKUP_SERVICE}
      {...props}
      _style={extendStyle(BACKUP_SERVICE, props)}
    />
  )
}
