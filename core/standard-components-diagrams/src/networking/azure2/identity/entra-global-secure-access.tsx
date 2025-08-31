import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTRA_GLOBAL_SECURE_ACCESS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Global_Secure_Access.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function EntraGlobalSecureAccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRA_GLOBAL_SECURE_ACCESS}
      {...props}
      _style={extendStyle(ENTRA_GLOBAL_SECURE_ACCESS, props)}
    />
  )
}
