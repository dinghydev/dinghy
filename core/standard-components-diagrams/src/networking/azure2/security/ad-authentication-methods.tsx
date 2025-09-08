import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AD_AUTHENTICATION_METHODS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Managed_Identities.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66,
}

export function AdAuthenticationMethods(props: DiagramNodeProps) {
  return (
    <Shape
      {...AD_AUTHENTICATION_METHODS}
      {...props}
      _style={extendStyle(AD_AUTHENTICATION_METHODS, props)}
    />
  )
}
