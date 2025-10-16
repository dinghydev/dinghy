import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACKUP_FILE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.backup_file;',
  },
  _original_width: 57.6,
  _original_height: 53.2,
}

export function BackupFile(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_FILE}
      {...props}
      _style={extendStyle(BACKUP_FILE, props)}
    />
  )
}
