import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RECOVERY_SERVICES_VAULTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Recovery_Services_Vaults.svg;',
  _width: 69,
  _height: 60,
}

export function RecoveryServicesVaults(props: DiagramNodeProps) {
  return <Shape {...RECOVERY_SERVICES_VAULTS} {...props} />
}
