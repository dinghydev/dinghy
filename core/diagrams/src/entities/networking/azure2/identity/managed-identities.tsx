import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANAGED_IDENTITIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Managed_Identities.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66,
}

export function ManagedIdentities(props: NodeProps) {
  return (
    <Shape
      {...MANAGED_IDENTITIES}
      {...props}
      _style={extendStyle(MANAGED_IDENTITIES, props)}
    />
  )
}
