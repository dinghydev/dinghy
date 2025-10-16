import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RECOVERY_SERVICES_VAULTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Recovery_Services_Vaults.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 60,
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
