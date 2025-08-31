import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AD_PRIVILEGE_IDENTITY_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_Privilege_Identity_Management.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function AdPrivilegeIdentityManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...AD_PRIVILEGE_IDENTITY_MANAGEMENT}
      {...props}
      _style={extendStyle(AD_PRIVILEGE_IDENTITY_MANAGEMENT, props)}
    />
  )
}
