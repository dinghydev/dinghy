import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACKUP_FILE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.backup_file;',
  _width: 57.6,
  _height: 53.2,
}

export function BackupFile(props: DiagramNodeProps) {
  return <Shape {...BACKUP_FILE} {...props} />
}
