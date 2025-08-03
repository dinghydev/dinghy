import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACKUP_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Backup_Center.svg;strokeColor=none;',
  _width: 68,
  _height: 62,
}

export function BackupCenter(props: DiagramNodeProps) {
  return <Shape {...BACKUP_CENTER} {...props} />
}
