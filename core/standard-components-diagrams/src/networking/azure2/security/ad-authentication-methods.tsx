import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AD_AUTHENTICATION_METHODS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Managed_Identities.svg;',
  _width: 68,
  _height: 66,
}

export function AdAuthenticationMethods(props: DiagramNodeProps) {
  return <Shape {...AD_AUTHENTICATION_METHODS} {...props} />
}
