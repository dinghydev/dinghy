import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTRA_PRIVATE_ACCESS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Private_Access.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function EntraPrivateAccess(props: DiagramNodeProps) {
  return <Shape {...ENTRA_PRIVATE_ACCESS} {...props} />
}
