import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AD_DOMAIN_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_AD_Domain_Services.svg;strokeColor=none;',
  _width: 70,
  _height: 64,
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
