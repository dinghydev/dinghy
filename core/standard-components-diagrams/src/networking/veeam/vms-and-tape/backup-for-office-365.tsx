import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACKUP_FOR_OFFICE_365 = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.backup_for_office_365;',
  _width: 44.8,
  _height: 44.8,
}

export function BackupForOffice365(props: DiagramNodeProps) {
  return <Shape {...BACKUP_FOR_OFFICE_365} {...props} />
}
