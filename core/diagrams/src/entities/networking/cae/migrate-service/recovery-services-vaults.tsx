import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RECOVERY_SERVICES_VAULTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Backup.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function RecoveryServicesVaults(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, RECOVERY_SERVICES_VAULTS)} />
  )
}
