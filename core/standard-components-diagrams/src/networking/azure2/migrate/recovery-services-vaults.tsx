import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RECOVERY_SERVICES_VAULTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/migrate/Recovery_Services_Vaults.svg;strokeColor=none;',
  _width: 69,
  _height: 60,
}

export function RecoveryServicesVaults(props: DiagramNodeProps) {
  return (
    <Shape
      {...RECOVERY_SERVICES_VAULTS}
      {...props}
      _style={extendStyle(RECOVERY_SERVICES_VAULTS, props)}
    />
  )
}
