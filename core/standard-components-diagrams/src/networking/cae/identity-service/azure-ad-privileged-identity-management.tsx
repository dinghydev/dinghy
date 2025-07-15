import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_AD_PRIVILEGED_IDENTITY_MANAGEMENT = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_AD_Privileged_Identity_Management.svg;',
  _width: 50,
  _height: 50,
}

export function AzureAdPrivilegedIdentityManagement(props: DiagramNodeProps) {
  return <Shape {...AZURE_AD_PRIVILEGED_IDENTITY_MANAGEMENT} {...props} />
}
