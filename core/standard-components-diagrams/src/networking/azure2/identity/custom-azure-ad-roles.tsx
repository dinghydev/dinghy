import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CUSTOM_AZURE_AD_ROLES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Custom_Azure_AD_Roles.svg;',
  _width: 68,
  _height: 68,
}

export function CustomAzureAdRoles(props: DiagramNodeProps) {
  return <Shape {...CUSTOM_AZURE_AD_ROLES} {...props} />
}
