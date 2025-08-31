import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTRA_PRIVILEGED_IDENTITY_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Privileged_Identity_Management.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function EntraPrivilegedIdentityManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRA_PRIVILEGED_IDENTITY_MANAGEMENT}
      {...props}
      _style={extendStyle(ENTRA_PRIVILEGED_IDENTITY_MANAGEMENT, props)}
    />
  )
}
