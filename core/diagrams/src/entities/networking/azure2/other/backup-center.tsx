import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACKUP_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Backup_Center.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function BackupCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_CENTER}
      {...props}
      _style={extendStyle(BACKUP_CENTER, props)}
    />
  )
}
