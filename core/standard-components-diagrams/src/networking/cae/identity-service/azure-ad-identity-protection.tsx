import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_AD_IDENTITY_PROTECTION = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_AD_Identity_Protection.svg;',
  _width: 50,
  _height: 50,
}

export function AzureAdIdentityProtection(props: DiagramNodeProps) {
  return <Shape {...AZURE_AD_IDENTITY_PROTECTION} {...props} />
}
