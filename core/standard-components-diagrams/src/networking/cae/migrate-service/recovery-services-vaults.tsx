import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RECOVERY_SERVICES_VAULTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Backup.svg;strokeColor=none;',
  _width: 50,
  _height: 42,
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
