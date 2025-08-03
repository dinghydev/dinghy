import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INFRASTRUCTURE_BACKUP = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Infrastructure_Backup.svg;strokeColor=none;',
  _width: 60,
  _height: 69,
}

export function InfrastructureBackup(props: DiagramNodeProps) {
  return <Shape {...INFRASTRUCTURE_BACKUP} {...props} />
}
