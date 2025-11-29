import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTRA_PRIVILEGED_IDENTITY_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Privileged_Identity_Management.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function EntraPrivilegedIdentityManagement(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ENTRA_PRIVILEGED_IDENTITY_MANAGEMENT)}
    />
  )
}
