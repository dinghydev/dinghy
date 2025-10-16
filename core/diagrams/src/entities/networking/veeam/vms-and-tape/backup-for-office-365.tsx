import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACKUP_FOR_OFFICE_365 = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.backup_for_office_365;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function BackupForOffice365(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_FOR_OFFICE_365}
      {...props}
      _style={extendStyle(BACKUP_FOR_OFFICE_365, props)}
    />
  )
}
