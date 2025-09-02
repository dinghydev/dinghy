import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_LOCAL = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.backup_local',
  },
  _original_width: 49,
  _original_height: 50,
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
