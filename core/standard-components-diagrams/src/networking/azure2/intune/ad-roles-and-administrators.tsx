import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AD_ROLES_AND_ADMINISTRATORS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Azure_AD_Roles_and_Administrators.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
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
