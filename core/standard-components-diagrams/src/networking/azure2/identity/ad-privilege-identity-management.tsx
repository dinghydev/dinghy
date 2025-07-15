import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AD_PRIVILEGE_IDENTITY_MANAGEMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_Privilege_Identity_Management.svg;',
  _width: 68,
  _height: 68,
}

export function AdPrivilegeIdentityManagement(props: DiagramNodeProps) {
  return <Shape {...AD_PRIVILEGE_IDENTITY_MANAGEMENT} {...props} />
}
