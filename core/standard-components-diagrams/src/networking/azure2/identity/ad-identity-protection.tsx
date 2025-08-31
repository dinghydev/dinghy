import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AD_IDENTITY_PROTECTION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_Identity_Protection.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 62,
}

export function AdIdentityProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...AD_IDENTITY_PROTECTION}
      {...props}
      _style={extendStyle(AD_IDENTITY_PROTECTION, props)}
    />
  )
}
