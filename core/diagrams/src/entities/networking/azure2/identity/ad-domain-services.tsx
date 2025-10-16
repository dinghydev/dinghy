import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AD_DOMAIN_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_Domain_Services.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 64,
}

export function AdDomainServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...AD_DOMAIN_SERVICES}
      {...props}
      _style={extendStyle(AD_DOMAIN_SERVICES, props)}
    />
  )
}
