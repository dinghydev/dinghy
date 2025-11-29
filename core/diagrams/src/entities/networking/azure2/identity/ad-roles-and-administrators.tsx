import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AD_ROLES_AND_ADMINISTRATORS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Azure_AD_Roles_and_Administrators.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AdRolesAndAdministrators(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, AD_ROLES_AND_ADMINISTRATORS)}
    />
  )
}
