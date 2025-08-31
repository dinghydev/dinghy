import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AD_ROLES_AND_ADMINISTRATORS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Azure_AD_Roles_and_Administrators.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AdRolesAndAdministrators(props: DiagramNodeProps) {
  return (
    <Shape
      {...AD_ROLES_AND_ADMINISTRATORS}
      {...props}
      _style={extendStyle(AD_ROLES_AND_ADMINISTRATORS, props)}
    />
  )
}
