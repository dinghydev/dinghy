import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VEEAM_BACKUP_FOR_OFFICE_365 = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_backup_for_office_365;',
  _width: 34,
  _height: 34,
}

export function VeeamBackupForOffice365(props: DiagramNodeProps) {
  return <Shape {...VEEAM_BACKUP_FOR_OFFICE_365} {...props} />
}
