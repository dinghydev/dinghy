import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTRA_VERIFIED_ID = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Verified_ID.svg;strokeColor=none;',
  _width: 68,
  _height: 60.440000000000005,
}

export function EntraVerifiedId(props: DiagramNodeProps) {
  return <Shape {...ENTRA_VERIFIED_ID} {...props} />
}
