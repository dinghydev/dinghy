import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_AD_PRIVILEGED_IDENTITY_MANAGEMENT = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_AD_Privileged_Identity_Management.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzureAdPrivilegedIdentityManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_AD_PRIVILEGED_IDENTITY_MANAGEMENT}
      {...props}
      _style={extendStyle(AZURE_AD_PRIVILEGED_IDENTITY_MANAGEMENT, props)}
    />
  )
}
