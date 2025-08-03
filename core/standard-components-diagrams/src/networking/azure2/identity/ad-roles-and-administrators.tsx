import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AD_ROLES_AND_ADMINISTRATORS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Azure_AD_Roles_and_Administrators.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function AdRolesAndAdministrators(props: DiagramNodeProps) {
  return <Shape {...AD_ROLES_AND_ADMINISTRATORS} {...props} />
}
