import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACKUP_VAULT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Backup_Vault.svg;strokeColor=none;',
  _width: 68,
  _height: 57.96,
}

export function BackupVault(props: DiagramNodeProps) {
  return <Shape {...BACKUP_VAULT} {...props} />
}
