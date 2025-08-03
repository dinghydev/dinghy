import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RECOVERY_SERVICES_VAULT = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Backup.svg;strokeColor=none;',
  _width: 50,
  _height: 42,
}

export function RecoveryServicesVault(props: DiagramNodeProps) {
  return <Shape {...RECOVERY_SERVICES_VAULT} {...props} />
}
