import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOM_AZURE_AD_ROLES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Custom_Azure_AD_Roles.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function CustomAzureAdRoles(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOM_AZURE_AD_ROLES}
      {...props}
      _style={extendStyle(CUSTOM_AZURE_AD_ROLES, props)}
    />
  )
}
