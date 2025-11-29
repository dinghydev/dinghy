import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACKUP_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Backup_Center.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function BackupCenter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BACKUP_CENTER)} />
}
