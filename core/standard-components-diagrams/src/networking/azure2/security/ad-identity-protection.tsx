import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AD_IDENTITY_PROTECTION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_Identity_Protection.svg;',
  _width: 68,
  _height: 68,
}

export function AdIdentityProtection(props: DiagramNodeProps) {
  return <Shape {...AD_IDENTITY_PROTECTION} {...props} />
}
