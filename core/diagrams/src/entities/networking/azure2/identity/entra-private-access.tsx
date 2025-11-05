import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTRA_PRIVATE_ACCESS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Private_Access.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function EntraPrivateAccess(props: NodeProps) {
  return (
    <Shape
      {...ENTRA_PRIVATE_ACCESS}
      {...props}
      _style={extendStyle(ENTRA_PRIVATE_ACCESS, props)}
    />
  )
}
