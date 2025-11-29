import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACKUP_VAULT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Backup_Vault.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 57.96,
}

export function BackupVault(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BACKUP_VAULT)} />
}
