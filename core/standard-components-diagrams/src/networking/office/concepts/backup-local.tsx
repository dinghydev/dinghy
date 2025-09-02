import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_LOCAL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.backup_local;',
  },
  _original_width: 48,
  _original_height: 44,
}

export function BackupLocal(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_LOCAL}
      {...props}
      _style={extendStyle(BACKUP_LOCAL, props)}
    />
  )
}
