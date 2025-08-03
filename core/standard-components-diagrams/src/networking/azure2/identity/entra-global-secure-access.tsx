import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTRA_GLOBAL_SECURE_ACCESS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Global_Secure_Access.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function EntraGlobalSecureAccess(props: DiagramNodeProps) {
  return <Shape {...ENTRA_GLOBAL_SECURE_ACCESS} {...props} />
}
