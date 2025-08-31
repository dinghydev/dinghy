import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_AD_PRIVILEGED_IDENTITY_MANAGEMENT = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_AD_Privileged_Identity_Management.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
