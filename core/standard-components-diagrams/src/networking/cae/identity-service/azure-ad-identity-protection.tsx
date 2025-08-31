import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_AD_IDENTITY_PROTECTION = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_AD_Identity_Protection.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AzureAdIdentityProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_AD_IDENTITY_PROTECTION}
      {...props}
      _style={extendStyle(AZURE_AD_IDENTITY_PROTECTION, props)}
    />
  )
}
